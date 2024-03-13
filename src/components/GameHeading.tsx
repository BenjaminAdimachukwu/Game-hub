import React from "react";
import { Heading } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import usePlatForms from "../hooks/usePlatForms";
import usePlatform from "../hooks/usePlatform";
import useGenre from "../hooks/useGenre";

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
  genreId?: number;
  platformId?: number;
  sortOrder: string;
  searchText: string;
}

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const platform = usePlatform(gameQuery.platformId)

  const genre = useGenre(gameQuery.genreId)
  const heading = `${genre?.name || ""} ${
    platform?.name || ""
  }  Game`;
  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
