import React from "react";
import bullEye from "../assets/bulls-eye.webp";
import meh from "../assets/meh.webp";
import thumbsUp from "../assets/thumbs-up.webp";
import { Image, ImageProps } from "@chakra-ui/react";
interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;

  const emojiMap: {[key : number]: ImageProps} = {
    3: { src: meh, alt: 'meh', boxSize: '25px'},
    4: {src: thumbsUp, alt: 'thumbsUp', boxSize: '25px'},
    5: {src: bullEye, alt: 'bullEye', boxSize: '30px'},
  };
  return <Image {...emojiMap[rating]} marginTop={1}/>
};

export default Emoji;
