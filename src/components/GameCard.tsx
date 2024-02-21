import React from 'react'
import { Card, Image,CardBody, Heading } from '@chakra-ui/react'

interface Game {
  id: number;
  name: string;
  background_image: string
}

interface Props {
  game: Game
}

const GameCard = ({game} : Props) => {
  return (
    <Card borderRadius={10} overflow='hidden'>
        <Image src={game.background_image}/>
        <CardBody>
          <Heading fontSize='2xl'>{game.name}</Heading>
        </CardBody>
    </Card>
  )
}

export default GameCard