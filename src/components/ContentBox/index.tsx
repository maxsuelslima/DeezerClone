import { Box, Text,Image, SimpleGrid, Link as ChakraLink } from "@chakra-ui/react"
import Link from "next/link";
import { deezerFetcher } from "../../pages";

const ContentBox=({teste}:any)=>{
    return(
        <Box mt="56px" h="100%" w="100%" bg='gray.500' borderBottom="1px" borderColor="gray.200"> 
            <Box w="100%" px="48px">
            <ChakraLink>
                <Link href={`/teste`}>
                <Box bg="red">
                    <Text fontWeight="bold" fontSize="22px" py="24px">Playlist que voce vai amar</Text>
                </Box>
                </Link>
                </ChakraLink>
                <SimpleGrid bg="pink.300" minChildWidth="234px">
                   <ChakraLink><Link href={`/`}><Box> <Image boxSize="234px" src="https://e-cdns-images.dzcdn.net/images/playlist/096be3005f0c050bf1a707d596697bf3/264x264-000000-80-0-0.jpg"/></Box>
                    </Link></ChakraLink>
                    <ChakraLink><Link href={`/`}><Box> <Image boxSize="234px" src="https://e-cdns-images.dzcdn.net/images/playlist/096be3005f0c050bf1a707d596697bf3/264x264-000000-80-0-0.jpg"/></Box>
                    </Link></ChakraLink>
                    <ChakraLink><Link href={`/`}><Box> <Image boxSize="234px" src="https://e-cdns-images.dzcdn.net/images/playlist/096be3005f0c050bf1a707d596697bf3/264x264-000000-80-0-0.jpg"/></Box>
                    </Link></ChakraLink>
                    <ChakraLink><Link href={`/`}><Box> <Image boxSize="234px" src="https://e-cdns-images.dzcdn.net/images/playlist/096be3005f0c050bf1a707d596697bf3/264x264-000000-80-0-0.jpg"/></Box>
                    </Link></ChakraLink>
                </SimpleGrid>
                <Box bg="red">
                    <Text fontWeight="bold" fontSize="22px" py="24px">Playlist que voce vai amar</Text>
                </Box>
                <SimpleGrid bg="pink.300"columns={4}>
                    <ChakraLink><Link href={`/`}><Box> <Image boxSize="234px" src="https://e-cdns-images.dzcdn.net/images/playlist/096be3005f0c050bf1a707d596697bf3/264x264-000000-80-0-0.jpg"/></Box>
                    </Link></ChakraLink>
                    <ChakraLink><Link href={`/`}><Box> <Image boxSize="234px" src="https://e-cdns-images.dzcdn.net/images/playlist/096be3005f0c050bf1a707d596697bf3/264x264-000000-80-0-0.jpg"/></Box>
                    </Link></ChakraLink>
                    <ChakraLink><Link href={`/`}><Box> <Image boxSize="234px" src="https://e-cdns-images.dzcdn.net/images/playlist/096be3005f0c050bf1a707d596697bf3/264x264-000000-80-0-0.jpg"/></Box>
                    </Link></ChakraLink>
                    <ChakraLink><Link href={`/`}><Box> <Image boxSize="234px" src="https://e-cdns-images.dzcdn.net/images/playlist/096be3005f0c050bf1a707d596697bf3/264x264-000000-80-0-0.jpg"/></Box>
                    </Link></ChakraLink>
                </SimpleGrid>
                <Box bg="red">
                    <Text fontWeight="bold" fontSize="22px" py="24px">Playlist que voce vai amar</Text>
                </Box>
                <SimpleGrid bg="pink.300"columns={4}>
                    <ChakraLink><Link href={`/`}><Box> <Image boxSize="234px" src="https://e-cdns-images.dzcdn.net/images/playlist/096be3005f0c050bf1a707d596697bf3/264x264-000000-80-0-0.jpg"/></Box>
                    </Link></ChakraLink>
                    <ChakraLink><Link href={`/`}><Box> <Image boxSize="234px" src="https://e-cdns-images.dzcdn.net/images/playlist/096be3005f0c050bf1a707d596697bf3/264x264-000000-80-0-0.jpg"/></Box>
                    </Link></ChakraLink>
                    <ChakraLink><Link href={`/`}><Box> <Image boxSize="234px" src="https://e-cdns-images.dzcdn.net/images/playlist/096be3005f0c050bf1a707d596697bf3/264x264-000000-80-0-0.jpg"/></Box>
                    </Link></ChakraLink>
                    <ChakraLink><Link href={`/`}><Box> <Image boxSize="234px" src="https://e-cdns-images.dzcdn.net/images/playlist/096be3005f0c050bf1a707d596697bf3/264x264-000000-80-0-0.jpg"/></Box>
                    </Link></ChakraLink>
                </SimpleGrid>
                <Box bg="red">
                    <Text fontWeight="bold" fontSize="22px" py="24px">Playlist que voce vai amar</Text>
                </Box>
                <SimpleGrid bg="pink.300"columns={4}>
                    <ChakraLink><Link href={`/`}><Box> <Image boxSize="234px" src="https://e-cdns-images.dzcdn.net/images/playlist/096be3005f0c050bf1a707d596697bf3/264x264-000000-80-0-0.jpg"/></Box>
                    </Link></ChakraLink>
                    <ChakraLink><Link href={`/`}><Box> <Image boxSize="234px" src="https://e-cdns-images.dzcdn.net/images/playlist/096be3005f0c050bf1a707d596697bf3/264x264-000000-80-0-0.jpg"/></Box>
                    </Link></ChakraLink>
                    <ChakraLink><Link href={`/`}><Box> <Image boxSize="234px" src="https://e-cdns-images.dzcdn.net/images/playlist/096be3005f0c050bf1a707d596697bf3/264x264-000000-80-0-0.jpg"/></Box>
                    </Link></ChakraLink>
                    <ChakraLink><Link href={`/`}><Box> <Image boxSize="234px" src="https://e-cdns-images.dzcdn.net/images/playlist/096be3005f0c050bf1a707d596697bf3/264x264-000000-80-0-0.jpg"/></Box>
                    </Link></ChakraLink>
                </SimpleGrid>
                <Box bg="red">
                    <Text fontWeight="bold" fontSize="22px" py="24px">Playlist que voce vai amar</Text>
                </Box>
                <SimpleGrid bg="pink.300"columns={4}>
                    <ChakraLink><Link href={`/`}><Box> <Image boxSize="234px" src="https://e-cdns-images.dzcdn.net/images/playlist/096be3005f0c050bf1a707d596697bf3/264x264-000000-80-0-0.jpg"/></Box>
                    </Link></ChakraLink>
                    <ChakraLink><Link href={`/`}><Box> <Image boxSize="234px" src="https://e-cdns-images.dzcdn.net/images/playlist/096be3005f0c050bf1a707d596697bf3/264x264-000000-80-0-0.jpg"/></Box>
                    </Link></ChakraLink>
                    <ChakraLink><Link href={`/`}><Box> <Image boxSize="234px" src="https://e-cdns-images.dzcdn.net/images/playlist/096be3005f0c050bf1a707d596697bf3/264x264-000000-80-0-0.jpg"/></Box>
                    </Link></ChakraLink>
                    <ChakraLink><Link href={`/`}><Box> <Image boxSize="234px" src="https://e-cdns-images.dzcdn.net/images/playlist/096be3005f0c050bf1a707d596697bf3/264x264-000000-80-0-0.jpg"/></Box>
                    </Link></ChakraLink>
                </SimpleGrid>
                <Box bg="red">
                    <Text fontWeight="bold" fontSize="22px" py="24px">Playlist que voce vai amar</Text>
                </Box>
                <SimpleGrid bg="pink.300"columns={4}>
                    <ChakraLink><Link href={`/`}><Box> <Image boxSize="234px" src="https://e-cdns-images.dzcdn.net/images/playlist/096be3005f0c050bf1a707d596697bf3/264x264-000000-80-0-0.jpg"/></Box>
                    </Link></ChakraLink>
                    <ChakraLink><Link href={`/`}><Box> <Image boxSize="234px" src="https://e-cdns-images.dzcdn.net/images/playlist/096be3005f0c050bf1a707d596697bf3/264x264-000000-80-0-0.jpg"/></Box>
                    </Link></ChakraLink>
                    <ChakraLink><Link href={`/`}><Box> <Image boxSize="234px" src="https://e-cdns-images.dzcdn.net/images/playlist/096be3005f0c050bf1a707d596697bf3/264x264-000000-80-0-0.jpg"/></Box>
                    </Link></ChakraLink>
                    <ChakraLink><Link href={`/`}><Box> <Image boxSize="234px" src="https://e-cdns-images.dzcdn.net/images/playlist/096be3005f0c050bf1a707d596697bf3/264x264-000000-80-0-0.jpg"/></Box>
                    </Link></ChakraLink>
                </SimpleGrid>
            </Box>
        </Box>
    )
}



export default ContentBox;