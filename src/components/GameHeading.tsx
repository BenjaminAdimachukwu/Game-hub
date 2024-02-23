import React from 'react'
import { Heading } from '@chakra-ui/react';

interface Genre {
    id: number;
    name: string;
    image_background: string;
  }

interface Platform {
    id: number;
    name: string;
    slug: string;
  }

interface GameQuery {
    genre: Genre | null;
    platform: Platform | null;
    sortOrder: string
    searchText: string
  }

interface Props{
    gameQuery: GameQuery
}

const GameHeading = ({gameQuery}: Props) => {
    const heading = `${gameQuery.genre?.name || ''} ${gameQuery.platform?.name || ''}  Game`
  return (
    <Heading as='h1' marginY={5} fontSize='5xl'>{heading}</Heading>
  )
}

export default GameHeading