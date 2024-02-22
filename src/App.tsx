import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GamGrid from "./components/GamGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import PlatFormSelector from "./components/PlatFormSelector";
interface Genre {
  id: number;
  name: string;
  image_background:string
  }
function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null)
  return (
    <Grid templateAreas={{
      base: `"nav" "main"`,
      lg: `"nav nav" "aside main"`
    }}
    
    templateColumns={{
base: '1fr',
lg: '200px 1fr'
    }}
    >
      
      <GridItem area="nav">
        <Navbar/>
      </GridItem>
      <Show above="lg">
      <GridItem area="aside" paddingX={5}>
        <GenreList selectedGenre={selectedGenre} onSelectGenre={(genre)=> setSelectedGenre(genre)}/>
      </GridItem>
      </Show>
      <GridItem area="main">
        <PlatFormSelector/>
        <GamGrid selectedGenre={selectedGenre}/>
      </GridItem>
    </Grid>
  );
}
export default App;
