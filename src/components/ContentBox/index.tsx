import { Box, Text,Image, SimpleGrid, Link as ChakraLink } from "@chakra-ui/react"
import { GetStaticProps } from "next";
import Link from "next/link";
import { type } from "os";
import { useEffect, useState } from "react";
import { deezerApi } from "../../../service/deezerApi";

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
        <Box mt="56px" h="100%" w="100%" bg='gray.500' borderBottom="1px" borderColor="gray.200"> 
            <Box w="100%" px="48px">
            <ChakraLink>
                <Link href={`/teste`}>
                <Box bg="red">
                    <Text fontWeight="bold" fontSize="22px" py="24px">Mais escutas</Text>
                </Box>
                </Link>
                </ChakraLink>
                <SimpleGrid bg="pink.300"columns={4}>
                    {charts.map((resp)=>{
                        return(
                        <ChakraLink>
                            <Link href={`/`}><Box>{resp.id}<Image boxSize="234px" src="https://e-cdns-images.dzcdn.net/images/playlist/096be3005f0c050bf1a707d596697bf3/264x264-000000-80-0-0.jpg"/></Box>
                            </Link>
                        </ChakraLink>
                        )
                    })}
                </SimpleGrid>
            </Box>
        </Box>
        </>
    )
}

export async function deezerFetcher(req:string='/user/5'){


  }