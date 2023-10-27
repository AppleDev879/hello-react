import { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

interface Props {
  onClick: () => void;
}

const Like = ({ onClick }: Props) => {
  const [liked, setLiked] = useState(false);
  return liked ? (
    <AiFillHeart
      size="50"
      color="red"
      onClick={() => {
        setLiked(false);
        onClick();
      }}
    />
  ) : (
    <AiOutlineHeart
      size="50"
      color="red"
      onClick={() => {
        setLiked(true);
        onClick();
      }}
    />
  );
};

export default Like;
