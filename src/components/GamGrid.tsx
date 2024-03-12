import { Box, Button, SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";
import React from "react";
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
  
  const { data, error, isLoading, isFetchingNextPage, hasNextPage, fetchNextPage } = useGames(gameQuery);
  const Skeletons = [1, 2, 3, 4, 5, 6,7, 8];

  if(error) return  <Text>{error.message}</Text>
  return (
    <Box padding="20px">
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={5
        }
        >
        {isLoading &&
          Skeletons.map((Skeleton) => (
            <GameCardContainer  key={Skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
          {data?.pages.map ((page, index) => <React.Fragment key={index} >
          {page?.results.map((game) => (
            <GameCardContainer key={game.id}>
            <GameCard  game={game} />
          </GameCardContainer>
        ))}
          </React.Fragment>)}
      </SimpleGrid>
     { hasNextPage && <Button onClick={() => fetchNextPage()} marginY={5}>{isFetchingNextPage ? 'Loading...':'Load More'}</Button>  } 
        </Box>
  );
};

export default GamGrid;
