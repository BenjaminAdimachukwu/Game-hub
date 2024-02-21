import React, { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { Text } from '@chakra-ui/react'
import useGames from "../hooks/usegames";


const GamGrid = () => {
 const {games, error} = useGames()
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
