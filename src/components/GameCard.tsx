import { Card, CardBody, HStack, Heading, Image } from '@chakra-ui/react';
import CriticScore from './CriticScore';
import PLatFormIconLists from './PLatFormIconLists';
import getCroppedImageUrl from '../services/image.url';
import Emoji from './Emoji';

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
  rating_top: number
  }


interface Props {
  game: Game
}

const GameCard = ({game} : Props) => {
  return (
    <Card>
        <Image src={getCroppedImageUrl(game.background_image)}/>
        <CardBody>
          <HStack justifyContent='space-between' marginBottom={3}>
         <PLatFormIconLists platforms={game.parent_platforms.map(p => p.platform)}/>
         <CriticScore score={game.metacritic}/>
          </HStack >
          <Heading fontSize='2xl'>{game.name} <Emoji rating={game.rating_top}/></Heading>
        </CardBody>
    </Card>
  ) 
}

export default GameCard