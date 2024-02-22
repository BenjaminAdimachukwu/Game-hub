import { List, ListItem, HStack, Image, Text, Spinner, Button } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image.url";
interface Genre {
  id: number;
  name: string;
  image_background:string
}

interface Props {
onSelectGenre : (genre: Genre) => void
}
const GenreList = ({onSelectGenre} : Props) => {
  // const { genres } = useGenres()
  const { data, isLoading, error } = useGenres();
  if(error) return null
  if(isLoading) return <Spinner/>
  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY='5px'>
          <HStack>
            <Image
              src={getCroppedImageUrl( genre.image_background)}
              borderRadius={8}
              boxSize="32px"
            />
            <Button onClick={()=> onSelectGenre(genre)} fontSize='lg' variant='link'>{genre.name}</Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
