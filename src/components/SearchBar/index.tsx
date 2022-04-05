import {Box, Flex, Icon, Input, InputGroup, InputLeftElement } from "@chakra-ui/react"
import {FiSearch} from "react-icons/fi"


const SearchBar=()=>{
    return(
        <Box
        border="1px solid gray.400"
        pl="24px"
        >
            <InputGroup
            >
                <InputLeftElement
                pointerEvents='none'
                height="56px"
                children={<Icon as={FiSearch} h="16px" w="16px" color="gray.500"/>}
                />
                <Input
                variant="unstyled"
                type='tel' 
                placeholder='Buscar'
                _placeholder={{
                    color:'gray.500'
                }} 
                height="56px"
                />
            </InputGroup>
        </Box>   

    )
}
export default SearchBar;