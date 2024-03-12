//import useData from "./useData";
import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
//import apiClient from "../services/api-client";
import APIclient from "../services/api-client";
interface Platform {
    id: number;
    name: string;
    slug: string
}
interface fetchResponse<T> {
    count: number;
    results: T[];
  }

const apiClient = new APIclient('/platforms/lists/parents')

const usePlatForms = ()=> useQuery({
    queryKey:['platforms'],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000,
    initialData: {count: platforms.length, results:platforms}
})
export default usePlatForms