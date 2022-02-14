import { Box, Flex, Input } from "@chakra-ui/react"

const SearchBar=()=>{
    return(
        <Box h="56px" w="100%" bg='gray.50' borderBottom="1px" borderColor="gray.200" position="fixed"> <Input size="lg" w="100%" variant="unstyled" placeholder="Buscar"/></Box>
    )
}
export default SearchBar;