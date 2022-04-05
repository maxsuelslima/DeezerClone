import { Box, Flex, SimpleGrid } from "@chakra-ui/react"
import ContentBox from "../ContentBox";
import Player from "../Player/Player";
import SearchBar from "../SearchBar";
import SideBar from "../SideBar";

const MusicPage=()=>{
    return(
        <Box>  
        <Flex direction="column" >
          <>
            <ContentBox/>
          </>
        </Flex>
      </Box>
    )
}
export default MusicPage;