import useCurrentUser from "@/hooks/useCurrentUser";
import useMovie from "@/hooks/useMovie";
import { useRouter } from "next/router";
import React from "react";

import { MdPlayDisabled, MdPlayArrow } from "react-icons/md";

interface PlayButtonProps {
  movieId: string;
}

const PlayButton: React.FC<PlayButtonProps> = ({ movieId }) => {
  const router = useRouter();
  const { data } = useMovie(movieId as string);
  const { data: user } = useCurrentUser();

  return (
    <div>
      {user ? (
        <button
          className="
            flex
            flex-row
            items-center 
          bg-white/50
            text-[10px] sm:text-lg md:text-xl
            font-semibold
            rounded-md
            px-2 md:px-5
            md:py-2
          hover:bg-neutral-300
            "
          onClick={() => router.push(`/watch/${data?.id}`)}
        >
          <MdPlayArrow className="mr-1" size={25} /> Watch Now
        </button>
      ) : (
        <button
          className="
            flex
            flex-row
            items-center 
          bg-white/50
            text-[10px] sm:text-lg md:text-xl
            font-semibold
            rounded-md
            px-2 md:px-5
            md:py-2
          hover:bg-neutral-300
            "
        >
          <MdPlayDisabled className="mr-1" size={25} /> Watch Now
        </button>
      )}
    </div>
  );
};

export default PlayButton;
