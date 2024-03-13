import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import APIclient from "../services/api-client";
import ms from "ms";
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
  genreId?: number;
  platformId?: number;
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
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
        },
      }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    staleTime: ms('24h')
  });

export default useGames;
