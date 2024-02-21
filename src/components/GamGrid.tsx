import React, { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { Text } from '@chakra-ui/react'
interface Game {
  id: number;
  name: string;
}

interface fetchedGamesResponse {
  count: number;
  results: Game[];
}

const GamGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<fetchedGamesResponse>("/games")
      .then((res) => setGames(res.data.results))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <div>
        {error && <Text>{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default GamGrid;
