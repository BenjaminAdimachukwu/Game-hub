//import useData from "./useData";
import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import apiClient from "../services/api-client";

interface Platform {
    id: number;
    name: string;
    slug: string
}
interface fetchResponse<T> {
    count: number;
    results: T[];
  }


const usePlatForms = ()=> useQuery({
    queryKey:['platforms'],
    queryFn:() => apiClient.get<fetchResponse<Platform>>('/platforms/lists/parents').then(res => res.data),
    staleTime: 24 * 60 * 60 * 1000,
    initialData: {count: platforms.length, results:platforms}
})
export default usePlatForms