import React, { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import useData from "./useData";

interface Platform {
  id: number;
  name: string;
  slug: string;
}
interface Genre {
  id: number;
  name: string;
  image_background: string;
}
interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}
interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string
  searchText: string
}

const useGames = (
  // selectedGenre: Genre | null,
  // selectedPlatform: Platform | null
  gameQuery: GameQuery
) =>
  useData<Game>(
    "/games",
    // { params: { genres: selectedGenre?.id, platforms: selectedPlatform?.id } },
    {
      params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText
      },
    },
    // [selectedGenre?.id, selectedPlatform?.id]
    [gameQuery]
  );

export default useGames;
