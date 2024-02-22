import { List, ListItem, HStack, Image, Text, Spinner } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image.url";
interface Genre {
  id: number;
  name: string;
}
const GenreList = () => {
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
            <Text fontSize='lg'>{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
