import { useQuery } from "@tanstack/react-query";
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
  results: T[];
}
const apiClient = new APIclient<Game>("/games")

const useGames = (gameQuery: GameQuery) =>
  useQuery<fetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: () =>
      apiClient
        .getAll( {
          params: {
            genres: gameQuery.genre?.id,
            parent_platforms: gameQuery.platform?.id,
            ordering: gameQuery.sortOrder,
            search: gameQuery.searchText,
          }
        })
         
       
       
  });

export default useGames;
