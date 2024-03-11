import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";
interface Genre {
  id: number;
  name: string;
  image_background:string
  }
  interface Platform {
    id: number;
    name: string;
    slug: string
}
interface GameQuery {
  genre: Genre | null;
  platform: Platform | null
  sortOrder: string
  searchText: string
}
interface Props {
  gameQuery:GameQuery
}




const GamGrid = ({gameQuery} : Props) => {
  
  const { data, error, isLoading } = useGames(gameQuery);
  const Skeletons = [1, 2, 3, 4, 5, 6,7, 8];

  if(error) return  <Text>{error.message}</Text>
  return (
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding="20px"
        spacing={5
        }
      >
        {isLoading &&
          Skeletons.map((Skeleton) => (
            <GameCardContainer  key={Skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {data?.results.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard  game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
  );
};

export default GamGrid;
