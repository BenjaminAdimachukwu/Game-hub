import { useQuery } from "@tanstack/react-query";
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
 interface Publisher {
    id: number;
    name: string;
  }
interface Game {
  id: number;
  name: string;
  slug: string;
  genres: Genre[];
  publishers: Publisher[]
  background_image: string;
  description_raw: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const apiClient = new APIclient<Game>("/games");

const useGame = (slug: string) =>
  useQuery({
    queryKey: ["games", slug],
    queryFn: () => apiClient.get(slug),
  });

  export default useGame