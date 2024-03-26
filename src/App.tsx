import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import GameHeading from "./components/GameHeading";
import GamGrid from "./components/GamGrid";
import GenreList from "./components/GenreList";
import Navbar from "./components/Navbar";
import PlatFormSelector from "./components/PlatFormSelector";
import SortSelector from "./components/SortSelector";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={5}>
          <GameHeading />
          <Flex marginBottom={5}>
            <Box marginRight={5}>
              <PlatFormSelector />
            </Box>
            <SortSelector />
          </Flex>
        </Box>
        <GamGrid />
      </GridItem>
    </Grid>
  );
}
export default App;
