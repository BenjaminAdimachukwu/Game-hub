import { useQuery } from "@tanstack/react-query";
import APIclient from "../services/api-client";

interface screenshot {
    id:number;
    image: string;
    width: number;
    height: number;
}

const useScreenShots = (gameId: number) => {
    const apiClient = new APIclient<screenshot>(`/games/${gameId}/screenshots`)
  return useQuery({
    queryKey: ["screenshots", gameId],
  queryFn: apiClient.getAll
});
};

export default useScreenShots