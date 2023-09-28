import { useMediaQuery, SimpleGrid, Box, Text, Img, Button, Center } from '@chakra-ui/react'
import React from 'react'
import icon from "../images/icon.svg"
import pizza from "../images/herosection_image.svg"
import clippath from "../images/clippath.svg"
import "../../styles/fonts.css"
import "../../styles/HeroSection.css"

const HeroSection = () => {

    const columns = {
        base: 1,
        md: 2,
    }

    return (
        <>
            <SimpleGrid
                columns={columns} spacing={{ base: '10' }}
                
            >
                <Box order={{ base: 0, md: 1 }} >
                    <Box w={{ base: '100%' }} h={{ base: 450}}>
                        <Box>
                            <Button
                                colorScheme='teal' variant='outline'
                                position='absolute'
                                zIndex='2'
                                top={{ base: 5 , md: 6}}
                                right={{base: 3, md: 5}}
                                borderRadius='full'
                                fontFamily='SourceSansProDemiBold'
                                color='bgColor1'
                                _hover={{
                                    variant: 'solid',
                                    color: '#E23744',
                                    backgroundColor: '#ffffff'
                                }}
                            >
                                <Text fontSize={{ base: 12, md: 15 }} letterSpacing={{ base: .48 , md: .48}}>Get In Touch</Text>
                            </Button>
                        </Box>
                        <Box position='relative'  >
                            <Img
                                src={pizza}
                                position='absolute'
                                zIndex='-1'
                                objectFit='cover'
                                // left={{ md: 5 }}
                                h={{ md: 750 }}
                                right={{ md: 0 }}
                            />
                            <Img
                                src={clippath}
                                position='absolute'
                                objectFit='cover'
                                top={{ md: -1 }}
                            />
                        </Box>
                    </Box>
                </Box>

                <Box
                    order={{ base: 1, md: 0 }}
                    flexDirection='column'
                    justifyContent='center'
                    alignItems='center'
                    pt={{base: 7, md: '0'}}
                >
                    <Box className="hero-section">
                        <Img pl={40} pt={3} src={icon}  />
                    </Box>
                    <Box pt={16} px={{ base: 10, md: '40' }} textAlign={{ base: 'center', md: 'start' }} lineHeight={{ base: 10 }}>
                        <Box lineHeight={{md: 1.1}} pb={{md: 8}}>
                            <span className='blue'>Discover the <span className='red'>Best</span> Food and Drinks</span>
                        </Box>
                        <Box lineHeight={{ base: 1.2 , md: 1.1}} pt={{base: 3, mid: '10'}}>
                            <span className='subtxt' >Naturally made Healthcare Products for the better care & support of your body.</span>
                        </Box>
                    </Box>
                    <Box pt={8} textAlign={{ base: 'center', md: 'start'}} pl={{md: '40'}}>
                        <button
                            className='explore-btn'
                        >
                            <Text px={4} py={4} fontSize={{ base: 15 , md: 20}} color='#ffffff'>Explore Now!</Text>
                        </button>
                    </Box>
                </Box>


            </SimpleGrid>
        </>
    )
}

export default HeroSection