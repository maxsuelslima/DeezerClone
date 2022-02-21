import { Box, Flex, SimpleGrid } from "@chakra-ui/react"
import ContentBox from "../ContentBox";
import Player from "../Player/Player";
import SearchBar from "../SearchBar";
import SideBar from "../SideBar";

const HomePage=()=>{
    return(
        <Box>  
        <Flex direction="column" >
          <Flex>
            <SideBar />
              <Flex overflowX="hidden" direction="column">
                <SearchBar/>
                <ContentBox/>
              </Flex>
          </Flex>
            <Player/> 
        </Flex>
      </Box>
    )
}
export default HomePage;