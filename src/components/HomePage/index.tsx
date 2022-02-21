import { Box, Flex } from "@chakra-ui/react"
import ContentBox from "../ContentBox";
import Player from "../Player/Player";
import SearchBar from "../SearchBar";
import SideBar from "../SideBar";

const HomePage=()=>{
    return(
        <> 
        <Flex>
          <SideBar />
          <Flex w="100%" direction="column">
            <SearchBar/>
            <ContentBox/>
            <Player/> 
          </Flex>
        </Flex>
      </>
    )
}
export default HomePage;