import { Box, Text,Image, HStack, Stack, Flex, Button } from "@chakra-ui/react"

const SideBar=()=>{
    return(
        <Box flexShrink={0} h="100%" w="219px" bg='gray.50' borderRight="1px" borderColor="gray.200" position="sticky" top="0">
            <Flex align="center" w="171px" m="0px 24px" p="0px 0px 6px" h='56px'>
                <Image flexShrink={0} w="125px" h="32px" src='https://upload.wikimedia.org/wikipedia/commons/d/db/Deezer_logo.svg'/>
            </Flex>
            <Stack textColor="white" fontSize="13px">
                    <Flex borderRadius="10px" flexDir="column"  w="187px" h="147px" bgGradient='linear-gradient(56deg,#0087c1 13%,#89d7bb)' p="20px 16px" m="36px 16px 12px">
                        <Text mb="13px">
                            Experimente Deezer Premium por R$ 0,90 por mês durante 2 meses
                        </Text>
                        <Button borderRadius="40px" border="1px solid white" bg="transparent">
                            Assinar
                        </Button>
                    </Flex>
            </Stack>
            <Stack mt="15px" spacing="5">
                <Text fontSize="2xl" fontWeight="bold">Músicas</Text>
                <Text fontSize="2xl" fontWeight="bold">Músicas</Text>
                <Text fontSize="2xl" fontWeight="bold">Músicas</Text>
                <Text fontSize="2xl" fontWeight="bold">Músicas</Text>
                <Text fontSize="2xl" fontWeight="bold">Músicas</Text>
            </Stack>
        </Box>
    )
}
export default SideBar;