import {
  List,
  ListItem,
  HStack,
  Image,
  Text,
  Spinner,
  Button,
  Heading,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image.url";
interface Genre {
  id: number;
  name: string;
  image_background: string;
}

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenreId?: number
}
const GenreList = ({ selectedGenreId, onSelectGenre }: Props) => {
  
  const { data, isLoading, error } = useGenres();
  if (error) return null;// no longer needed, but will be left here for future purposes
  if (isLoading) return <Spinner />; // no longer needed, but will be left here for future purposes
  return (
    <>
    <Heading fontSize='2xl' marginBottom={3}>Genres</Heading>
    <List>
      {data?.results.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              borderRadius={8}
              boxSize="32px"
              objectFit='cover'
              src={getCroppedImageUrl(genre.image_background)}
              />
            <Button
              whiteSpace="normal"
              textAlign="left"
              fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
              onClick={() => onSelectGenre(genre)}
              fontSize="lg"
              variant="link"
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
      </>
  );
};

export default GenreList;
