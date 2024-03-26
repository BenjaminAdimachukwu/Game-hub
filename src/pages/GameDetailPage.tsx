import { Heading, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import CriticScore from "../components/CriticScore";
import DefinitionItem from "../components/DefinitionItem";
import ExpandableText from "../components/ExpandableText";
import useGame from "../hooks/useGame";
import GameAttributes from "../components/GameAttributes";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);
  if (isLoading) return <Spinner />;

  if (error) throw error;

  return (
    <>
      <Heading>{game?.name}</Heading>
        <ExpandableText>{game?.description_raw}</ExpandableText>
     <GameAttributes game={game!}/>
    </>
  );
};

export default GameDetailPage;
