import type { NextPage } from 'next'
import {Flex, Text} from '@chakra-ui/react'
import SideBar from '../components/SideBar'
import Player from '../components/Player/Player'
import SearchBar from '../components/SearchBar'
import ContentBox from '../components/ContentBox'
import { Head, NextScript } from 'next/document'
import Script from 'next/script'
import { useState } from 'react'
const Home: NextPage = (data) => (  
  <>

    <Flex>
      <SideBar />
      <Flex w="100%" direction="column">
        <SearchBar/>
        <ContentBox props={data}/>
        <Player/> 
      </Flex>
    </Flex>
  </>

)
export async function deezerFetcher(){
  const res =await fetch('https://api.deezer.com/album/302127')
  const data = await res.json()
  console.log(data)
  if (!data) {
      return {
        notFound: true,
      }
    }
  
    return {
      props: {data}, 
    }
  }


export default Home




