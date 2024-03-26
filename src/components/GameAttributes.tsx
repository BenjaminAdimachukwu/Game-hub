import { SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react'
import CriticScore from './CriticScore';
import DefinitionItem from './DefinitionItem';
interface Platform {
    id: number;
    name: string;
    slug: string;
  }
    interface Genre {
      id: number;
      name: string;
      image_background: string;
    }
   interface Publisher {
      id: number;
      name: string;
    }

interface Game {
    id: number;
    name: string;
    slug: string;
    genres: Genre[];
    publishers: Publisher[]
    background_image: string;
    description_raw: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
    rating_top: number;
  }

interface Props{
    game: Game
}
const GameAttributes = ({game}:Props) => {
  return (
    <SimpleGrid columns={2} as='dl'>
    <DefinitionItem term="platforms">
      {game?.parent_platforms?.map(({ platform }) => (
        <Text key={platform.id}>{platform.name}</Text>
      ))}
    </DefinitionItem>
    <DefinitionItem term="Metascore">
      <CriticScore score={game!.metacritic} />
    </DefinitionItem>
    <DefinitionItem term="Genres">
      {game?.genres.map((genre) => (
        <Text key={genre.id}>{genre.name}</Text>
      ))}
    </DefinitionItem>
    <DefinitionItem term="Publishers">
      {game?.publishers?.map((publisher) => (
        <Text key={publisher.id}>{publisher.name}</Text>
      ))}
    </DefinitionItem>
  </SimpleGrid>
  )
}

export default GameAttributes