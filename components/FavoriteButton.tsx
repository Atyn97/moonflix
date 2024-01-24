import useCurrentUser from "@/hooks/useCurrentUser";
import React from "react";

import { AiOutlinePlus, AiOutlineCheck } from "react-icons/ai";

interface FavoriteButtonProps {
  movieId: string;
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({ movieId }) => {
  const { data: user } = useCurrentUser();

  return (
    <div>
      {user ? (
        <button
          className="
        cursor-pointer
        ml-auto 
        group/item 
        w-6 
        h-6 
        lg:w-10 
        lg:h-10 
      border-neutral-300
        border-2 
        rounded-full 
        flex 
        justify-center 
        items-center 
        transition 
      hover:border-white"
        >
          <AiOutlinePlus className="text-white" size={30} />
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

export default FavoriteButton;
