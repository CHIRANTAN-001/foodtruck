import React from 'react'
import { Flex, Box, Img, Text, SimpleGrid, GridItem } from '@chakra-ui/react'
import icon from "../images/icon.svg"
import "../../styles/ContactSection.css"

import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa"

const ContactSection = () => {

    const columns = {
        base: 1,
        md: 4
    }
    return (
        <>
            <Box pt={{ base: 10 }} >
                <SimpleGrid columns={columns} px={{ md: 20 }} py={{ md: 20 }} pl={{ md: 20 }} flexDirection={{ base: 'column', md: 'row' }} justifyContent={'space-evenly'} alignItems={'center'} spacingX={44} background='#F8F8F8'>
                    <GridItem pt={{ base: 10 }} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                        <Img
                            src={icon}
                            objectFit={'cover'}
                            w={{ md: '80%' }}
                        />
                    </GridItem>
                    <GridItem px={{ base: 10, md: 0 }} pt={{ base: 16 }}>
                        <Flex flexDirection={'column'}>
                            <span className='heading-txt'>Contact Us</span>
                            <Text pt={{ base: 2, md: 4 }} className='sub-txt'>Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM Market, XYZ-343434</Text>
                            <Text pt={{ base: 2, md: 4 }} className='sub-txt'>example2020@gmail.com</Text>
                            <Text pt={{ base: 2, md: 4 }} className='sub-txt'>(904) 443-0343</Text>
                        </Flex>
                    </GridItem>
                    <GridItem px={{ base: 10, md: 16 }} pt={{ base: 14 }}>
                        <Flex flexDirection={'column'}>
                            <span className='heading-txt'>More</span>
                            <Text pt={{ base: 2, md: 4 }} className='sub-txt'>About Us</Text>
                            <Text pt={{ base: 2, md: 4 }} className='sub-txt'>Products</Text>
                            <Text pt={{ base: 2, md: 4 }} className='sub-txt'>Career</Text>
                            <Text pt={{ base: 2, md: 4 }} className='sub-txt'>Contact Us</Text>
                        </Flex>
                    </GridItem>
                    <GridItem>
                        <Flex pt={{ base: 20 }} pb={{ base: 6 }} flexDirection={{ base: 'column', md: '' }}>
                            <Box textAlign={{ base: 'center', md: '' }}>
                                <Text className='verified-txt' display={{ base: 'inline', md: 'none' }}>© 2022 Food Truck Example</Text>
                            </Box>
                            <Box pt={{ base: 2, md: 5 }} pb={{ base: 5 }}>
                                    <Text className='links' display={{ base: 'none', md: 'inline'}} pl={{md: 10}}>Social Links</Text>
                                <Flex pl={{md: 5}} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} >
                                    <Flex pt={{md: 2}} flexDirection={{ base: 'row' }}  justifyContent={'center'} alignItems={'center'} gap={{base: 4, md:8}}>
                                        <FaInstagram color='#0E2368' className="social-media-icon" />
                                        <FaTwitter color='#0E2368' className="social-media-icon" />
                                        <FaFacebookF color='#0E2368' className="social-media-icon" />
                                    </Flex>
                                    <Text pt={{md: 28}} pr={{md: 0}} className='verified-txt-md' display={{ base: 'none', md: 'inline' }}>© 2022 Food Truck Example</Text>
                                </Flex>
                            </Box>
                        </Flex>
                    </GridItem>
                </SimpleGrid>
            </Box>
        </>
    )
}

export default ContactSection