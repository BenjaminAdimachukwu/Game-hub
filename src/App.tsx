import { Box, Button, ButtonGroup, Flex, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GamGrid from "./components/GamGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import PlatFormSelector from "./components/PlatFormSelector";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";
interface Genre {
  id: number;
  name: string;
  image_background: string;
}
interface Platform {
  id: number;
  name: string;
  slug: string;
}

interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string
  searchText: string
}
function App() {

  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <Navbar onSearch={(searchText) => setGameQuery({...gameQuery, searchText})} />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList
            selectedGenre={gameQuery.genre}
            onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          />
        </GridItem>
      </Show>
      <GridItem area="main">

        <Box paddingLeft={5}>
        <GameHeading gameQuery={gameQuery}/>
        <Flex  marginBottom={5}> 
        <Box marginRight={5}>
        <PlatFormSelector
          selectedPlatform={gameQuery.platform}
          onSelectPlatForm={(platform) =>
            setGameQuery({ ...gameQuery, platform })
          }
          />
        </Box>
        <SortSelector sortOrder={gameQuery.sortOrder} onSelectSortOrder={(sortOrder) => setGameQuery({...gameQuery, sortOrder})}/>
          </Flex>
          </Box>
        <GamGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}
export default App;
