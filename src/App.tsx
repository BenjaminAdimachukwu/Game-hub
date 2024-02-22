import { Button, ButtonGroup, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GamGrid from "./components/GamGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import PlatFormSelector from "./components/PlatFormSelector";
import SortSelector from "./components/SortSelector";
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
}
function App() {
  // const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null)
  // const [selectedPlatform, setselectedPlatform]= useState<Platform | null>(null)
  //the above was commented due to code refactoring

  const [GameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
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
        <Navbar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          {/* <GenreList selectedGenre={selectedGenre} onSelectGenre={(genre)=> setSelectedGenre(genre)}/> */}
          <GenreList
            selectedGenre={GameQuery.genre}
            onSelectGenre={(genre) => setGameQuery({ ...GameQuery, genre })}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        {/* <PlatFormSelector selectedPlatform={selectedPlatform} onSelectPlatForm={(platform)=> setselectedPlatform(platform)}/> */}
        <HStack spacing={5} paddingLeft={5} marginBottom={5}> 
        <PlatFormSelector
          selectedPlatform={GameQuery.platform}
          onSelectPlatForm={(platform) =>
            setGameQuery({ ...GameQuery, platform })
          }
          />
        <SortSelector/>
          </HStack>
        {/* <GamGrid selectedGenre={selectedGenre} selectedPlatform={selectedPlatform} /> */}
        <GamGrid gameQuery={GameQuery} />
      </GridItem>
    </Grid>
  );
}
export default App;
