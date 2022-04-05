import { Box, ChakraProvider, Flex, HStack, Stack } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import Player from '../components/Player/Player'
import SearchBar from '../components/SearchBar'
import SideBar from '../components/SideBar'

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <>
      <ChakraProvider>
        <Flex flexShrink={1}>
          <SideBar/>
          <Flex flexDir="column">
            <SearchBar/>
            <Component {...pageProps} />
            <Player/>
          </Flex>
        </Flex>
      </ChakraProvider>
    </>
  )
}

export default MyApp
