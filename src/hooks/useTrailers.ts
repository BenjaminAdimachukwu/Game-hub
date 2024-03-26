import { useQuery } from "@tanstack/react-query";
import APIclient from "../services/api-client";

interface Trailer {
  id: number;
  name: string;
  preview: string;
  data: { 480: string, max: string};
}

const useTrailers = (gameId: number) => {
  const apiClient = new APIclient<Trailer>(`/games/${gameId}/movies`);
  return useQuery({
    queryKey: ["Trailers", gameId],
    queryFn: apiClient.getAll,
  });
};

export default useTrailers;
