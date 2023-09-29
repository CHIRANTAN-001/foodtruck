import { GridItem, SimpleGrid, Flex, Box, Img } from '@chakra-ui/react'
import React from 'react'
import about from "../images/about.svg"
import "../../styles/AboutSection.css"

const AboutSection = () => {

    const columns = {
        md: 2,
        base: 1
    }

    return (
        <>
            <Box pt={{ md: 96, base: 20 }}>
                {/* <SimpleGrid
                  columns={columns}
                  className='about'
                  pt={{ md: 0, base: 12 }}
                  
              > */}
                <Flex className='about' px={{ md: 36 }} flexDirection={{ base: 'column', md: 'row' }} justifyContent='space-around' alignItems='center'>

                    <Box className='about-img' pl={{md: 32}}>
                        <img src={about} />
                    </Box>
                    <Box >
                        <Flex
                            flexDirection='column'
                            textAlign={{ base: 'center', md: 'start' }}
                            px={{ base: 6, md: 24 }}
                            h={{ base: 'auto' }}
                            w={{ base: '100%' }}
                            pt={{ base: 20, md: 0 }}
                            pb={{ base: 20, md: 0 }}
                            // px={{ md: 32 }}
                        >
                            <Box pl={{md: 20}}>
                                <Box pr={{ base: 0, md: 30 }}>
                                    <span className='about-heading'>About Us</span>
                                </Box>
                                <Box pt={{ base: 5 }} pr={{ base: 0, md: 30 }}>
                                    <span className='about-txt'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. t has survived not only five centuries.</span>
                                </Box>
                                <Box pt={{ base: 5 }} pr={{ base: 0, md: 30 }}>
                                    <button className='readmore-btn '>
                                        <span className='btn-txt' style={{color: '#ffffff'}} >Read More</span>
                                    </button>
                                </Box>
                            </Box>
                        </Flex>
                    </Box>
                </Flex>
                {/* </SimpleGrid> */}
            </Box>
        </>
    )
}

export default AboutSection