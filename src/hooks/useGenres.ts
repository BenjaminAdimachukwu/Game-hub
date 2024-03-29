import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import ms from "ms";
import APIclient from "../services/api-client";
interface Genre {
  id: number;
  name: string;
  image_background: string;
}
interface fetchResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}
const apiClient = new APIclient<Genre>("/genres");
const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: ms("24"),
    initialData: genres,
  });
export default useGenres;
