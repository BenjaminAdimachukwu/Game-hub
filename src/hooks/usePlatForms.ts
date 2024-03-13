
import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import APIclient from "../services/api-client";
interface Platform {
    id: number;
    name: string;
    slug: string
}

const apiClient = new APIclient<Platform>('/platforms/lists/parents')

const usePlatForms = ()=> useQuery({
    queryKey:['platforms'],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000,
    initialData: platforms
})
export default usePlatForms