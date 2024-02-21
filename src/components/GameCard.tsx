import React from 'react'
import { Card, Image,CardBody, Heading, Text} from '@chakra-ui/react'
import PLatFormIconLists from './PLatFormIconLists';

interface Platform {
  id: number
  name: string,
  slug:string
}
interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms:{ platform : Platform}[]
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
         <PLatFormIconLists platforms={game.parent_platforms.map(p => p.platform)}/>
        </CardBody>
    </Card>
  )
}

export default GameCard