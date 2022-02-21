import { Box, Text,Image, HStack, Stack } from "@chakra-ui/react"

const SideBar=()=>{
    return(
        <Box pl="24px" pr="30px" h="100%" w="220px" bg='gray.50' borderRight="1px" borderColor="gray.200" position="sticky" top="0">
            <Stack mt="15px" spacing="5">
                <Box><Image src='https://upload.wikimedia.org/wikipedia/commons/d/db/Deezer_logo.svg'></Image></Box>
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