import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { NextScript } from 'next/document'
import Script from 'next/script'

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <>

    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
    </>
  )
}

export default MyApp
