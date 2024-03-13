import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
//import apiClient from "../services/api-client";
import APIclient from "../services/api-client";

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
  rating_top: number;
}
interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}
interface fetchResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}
const apiClient = new APIclient<Game>("/games");

const useGames = (gameQuery: GameQuery) =>
  useInfiniteQuery<fetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
        },
      }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    staleTime: 24 * 60 * 60 * 1000 // 24hr
  });

export default useGames;
