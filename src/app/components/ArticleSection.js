import {
    Box,
    SimpleGrid,
    Card,
    CardBody,
    Image,
    Flex,
    Stack,
    Heading,
    Text,
    Divider,
    CardFooter,
    ButtonGroup,
    Button,
    HStack,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import "../../styles/ArticleSection.css"

import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

import articleData from '../data/ArticleData'

const ArticleSection = () => {

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3;

    const paginate = (array, currentPage, itemsPerPage) => {
        const start = (currentPage - 1) * itemsPerPage
        const end = start + itemsPerPage
        return array.slice(start, end);
    }

    const paginateArticleData = paginate(articleData, currentPage, itemsPerPage);

    const length = 120;

    function stringLimit(string) {
        if (string.length <= length) return string;
        else return string.substring(0, length) + '...';
    }

    const columns = {
        base: 1,
        md: 3,
    }

    return (
        <>
            <Box className="article-section" pt={{ md: 36, base: 20 }} >
                <Box pl={{ md: 32 }} textAlign={{base: 'center', md: 'start'}} pb={{base: 7}}>
                    <span className='article-txt' >Latest Articles</span>
                </Box>
                <Flex
                    flexDirection={{ base: 'column', md: 'row' }}
                    justifyContent={{ base: 'center', md: 'space-evenly' }}
                    alignItems='center'
                    px={{ md: '16' }}
                    pt={{ md: '16' }}
                    gap={8}
                >
                    {paginateArticleData.map((article) => {
                        const { image, heading, title } = article;
                        return (
                            <Card
                                maxW={{ base: 'xs', md: 'sm'}}
                                borderRadius='20.94'
                                outline={{ md: '1.37px solid rgba(147, 162, 211, 0.38)', base: '0.88px solid rgba(55, 55, 55, 1)' }}
                            >
                                <CardBody>
                                    <Image
                                        src={image}
                                        objectFit='cover'
                                        p={{base: 5}}
                                    />
                                    <Stack mt='6' spacing='3'>
                                        <Heading size={{ base: 'md', md: 'md' }} textAlign={{base: 'center', md: ''}} letterSpacing={{base: 1, md: ''}} className='card-heading'>{heading}</Heading>
                                        <Text p={{base: 5}}>
                                            {stringLimit(title)}
                                        </Text>

                                    </Stack>
                                    <Box pt={5} textAlign={{base: 'center', md: ''}}>
                                        <Button  variant={'outline'} rounded={'full'} outline={'1px solid rgba(66, 73, 97, 1)'}>
                                            <Text px={{ base: 8, md: 4 }} py={{base:4,md:0}} className='btn-txt' style={{ color: 'rgba(66, 73, 97, 1)' }}>Read More</Text>
                                        </Button>
                                    </Box>
                                </CardBody>

                            </Card>
                        )
                    })}


                </Flex>

                <Flex pt={12} flexDirection={'row'} gap={4} justifyContent={'center'} alignItems='center'>
                    {/* <ButtonGroup> */}
                    <Button
                        onClick={() => {
                            if (currentPage > 1) {
                                setCurrentPage(currentPage - 1)
                            }
                        }}
                        variant={'outline'}
                        outline={'1px solid rgba(66, 73, 97, 1)'}
                        size='xs'
                        h={7}
                        w={7}
                        className={currentPage === 1 ? 'faded-btn' : ''}
                    >
                        <Box>
                            <IoIosArrowBack size={20} />
                        </Box>
                    </Button>
                    <Box textAlign="center" >
                        <span className='pagecount'>{currentPage}/{Math.ceil(articleData.length / itemsPerPage)}</span>
                    </Box>
                    <Button
                        onClick={() => {
                            if (currentPage < Math.ceil(articleData.length / itemsPerPage)) {
                                setCurrentPage(currentPage + 1);
                            }
                        }}
                        variant={'outline'}
                        outline={'1px solid rgba(66, 73, 97, 1)'}
                        size='xs'
                        h={7}
                        w={7}
                        className={currentPage === Math.ceil(articleData.length / itemsPerPage) ? 'faded-btn' : ''}
                    >
                        <Box>
                            <IoIosArrowForward size={20} />
                        </Box>
                    </Button>
                    {/* </ButtonGroup> */}
                </Flex>
            </Box>
        </>
    )
}

export default ArticleSection