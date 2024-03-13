
import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import APIclient from "../services/api-client";
import ms from "ms";
interface Platform {
    id: number;
    name: string;
    slug: string
}

const apiClient = new APIclient<Platform>('/platforms/lists/parents')

const usePlatForms = ()=> useQuery({
    queryKey:['platforms'],
    queryFn: apiClient.getAll,
    staleTime: ms("24"),
    initialData: platforms
})
export default usePlatForms