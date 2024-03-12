import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
//import apiClient from "../services/api-client";
import APIclient from "../services/api-client";
interface Genre {
id: number;
name: string;
image_background:string
}
interface fetchResponse<T> {
    count: number;
    results: T[];
  }
const apiClient = new APIclient<Genre>('/genres')

const useGenres = ()=> useQuery({
    queryKey:['genres'],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000,
    initialData: {count: genres.length, results: genres}
})
export default useGenres

