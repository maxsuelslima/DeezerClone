import { Box, Text,Image, Link as ChakraLink, HStack, GridItem, Grid, Flex } from "@chakra-ui/react"
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
declare global{
    interface Window{DZ:any}
  }
  type responseDataPlaylist={
      id:number;
  }
  type playListData={
    data:responseDataPlaylist[];
  }
  type playlistArray={
    playlists:playListData;
  }


export default function ContentBox() {
    const [charts,setCharts]=useState<responseDataPlaylist[]>([])

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.DZ.api('/chart/0', (response:playlistArray)=>{
                setCharts(response.playlists.data.map(x=>{return{
                    id:x.id
                }}))
            });   
        }
        }, [])
  
    useEffect(()=>{
        console.log(charts)
    },[charts])    


    return(<>
        <Box mt="56px" h="100%" w="100%" bg='gray.500' borderBottom="1px" borderColor="gray.200" maxW="100%" > 
            <Box w="100%" px="48px" overflow="hidden">
                <ChakraLink>
                    <Link href={`/teste`}>
                    <Box bg="red">
                        <Text fontWeight="bold" fontSize="22px" py="24px">Mais escutas</Text>
                    </Box>
                    </Link>
                </ChakraLink>
                <Flex overflowX="auto" > 
                      {charts.map((resp)=>{
                        return(
                        <ChakraLink>
                            <Link href={`/`}><Box>{resp.id}<Image rounded="2%" boxSize="234px" src="https://e-cdns-images.dzcdn.net/images/playlist/096be3005f0c050bf1a707d596697bf3/264x264-000000-80-0-0.jpg"/></Box>
                            </Link>
                        </ChakraLink>
                        )
                    })}
                </Flex> 
            </Box>
            <Box w="100%" px="48px" overflow="hidden">
                <ChakraLink>
                    <Link href={`/teste`}>
                    <Box bg="red">
                        <Text fontWeight="bold" fontSize="22px" py="24px">Mais escutas</Text>
                    </Box>
                    </Link>
                </ChakraLink>

                <Grid gap={20} templateColumns='repeat(10, 300px)' maxH="300px" maxW="100%">                  
                      {charts.map((resp)=>{
                        return(
                        <ChakraLink>
                            <Link href={`/`}><GridItem>{resp.id}<Image rounded="2%" boxSize="234px" src="https://e-cdns-images.dzcdn.net/images/playlist/096be3005f0c050bf1a707d596697bf3/264x264-000000-80-0-0.jpg"/></GridItem>
                            </Link>
                        </ChakraLink>
                        )
                    })}
                </Grid>
            </Box>
            <Box w="100%" px="48px" overflow="hidden">
                <ChakraLink>
                    <Link href={`/teste`}>
                    <Box bg="red">
                        <Text fontWeight="bold" fontSize="22px" py="24px">Mais escutas</Text>
                    </Box>
                    </Link>
                </ChakraLink>

                <Grid gap={20} templateColumns='repeat(10, 300px)' maxH="300px" maxW="100%">                  
                      {charts.map((resp)=>{
                        return(
                        <ChakraLink>
                            <Link href={`/`}><GridItem>{resp.id}<Image rounded="2%" boxSize="234px" src="https://e-cdns-images.dzcdn.net/images/playlist/096be3005f0c050bf1a707d596697bf3/264x264-000000-80-0-0.jpg"/></GridItem>
                            </Link>
                        </ChakraLink>
                        )
                    })}
                </Grid>
            </Box>
            <Box w="100%" px="48px" overflow="hidden">
                <ChakraLink>
                    <Link href={`/teste`}>
                    <Box bg="red">
                        <Text fontWeight="bold" fontSize="22px" py="24px">Mais escutas</Text>
                    </Box>
                    </Link>
                </ChakraLink>

                <Grid gap={20} templateColumns='repeat(10, 300px)' maxH="300px" maxW="100%">                  
                      {charts.map((resp)=>{
                        return(
                        <ChakraLink>
                            <Link href={`/`}><GridItem>{resp.id}<Image rounded="2%" boxSize="234px" src="https://e-cdns-images.dzcdn.net/images/playlist/096be3005f0c050bf1a707d596697bf3/264x264-000000-80-0-0.jpg"/></GridItem>
                            </Link>
                        </ChakraLink>
                        )
                    })}
                </Grid>
            </Box>
            <Box w="100%" px="48px" overflow="hidden">
                <ChakraLink>
                    <Link href={`/teste`}>
                    <Box bg="red">
                        <Text fontWeight="bold" fontSize="22px" py="24px">Mais escutas</Text>
                    </Box>
                    </Link>
                </ChakraLink>

                <Grid gap={20} templateColumns='repeat(10, 300px)' maxH="300px" maxW="100%">                  
                      {charts.map((resp)=>{
                        return(
                        <ChakraLink>
                            <Link href={`/`}><GridItem>{resp.id}<Image rounded="2%" boxSize="234px" src="https://e-cdns-images.dzcdn.net/images/playlist/096be3005f0c050bf1a707d596697bf3/264x264-000000-80-0-0.jpg"/></GridItem>
                            </Link>
                        </ChakraLink>
                        )
                    })}
                </Grid>
            </Box>
        </Box>
        </>
    )
}

export async function deezerFetcher(req:string='/user/5'){


  }