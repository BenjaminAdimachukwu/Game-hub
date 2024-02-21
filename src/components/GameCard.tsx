import { Card, CardBody, HStack, Heading, Image } from '@chakra-ui/react';
import CriticScore from './CriticScore';
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
  parent_platforms:{ platform : Platform}[];
  metacritic: number
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

          <HStack justifyContent='space-between'>
         <PLatFormIconLists platforms={game.parent_platforms.map(p => p.platform)}/>
         <CriticScore score={game.metacritic}/>
          </HStack>
        </CardBody>
    </Card>
  )
}

export default GameCard