import React, { useCallback } from "react";

import { useRouter } from "next/router";
import { BiChevronDown } from "react-icons/bi";
import { MdPlayDisabled, MdPlayArrow } from "react-icons/md";
import FavoriteButton from "./FavoriteButton";
import useInfoModal from "@/hooks/useInfoModal";
import useCurrentUser from "@/hooks/useCurrentUser";

interface MovieCardProps {
  data: Record<string, any>;
}

const MovieCard: React.FC<MovieCardProps> = ({ data }) => {
  const router = useRouter();
  const { openModal } = useInfoModal();
  const { data: user } = useCurrentUser();

  return (
    <div className=" group bg-zinc-900 col-span relative h-[24vw] md:h-[12vw] rounded-md">
      <img
        onClick={() => router.push(`/watch/${data?.id}`)}
        className="
        cursor-pointer
        object-cover
        transition
        duration
        shadow-xl
        rounded-md
        group-hover:opacity-90
        sm:group-hover:opacity-0
        delay-300
        w-full
        h-[24vw]
        md:h-[12vw]
        "
        src={data.thumbnailUrl}
        alt="Thumbnail"
      />
      <div
        className="
          opacity-0
          absolute
          top-0
          transition
          duration-200
          z-10
          invisible
          sm:visible
          delay-300
          w-full
          scale-0
          group-hover:scale-110
          group-hover:-translate-y-[6vw]
          group-hover:translate-x-[1vw]
          group-hover:opacity-100
          "
      >
        <img
          className="
            cursor-pointer
            object-cover
            transition
            duration
            shadow-xl
            rounded-t-md
            w-full
            h-[12vw]
            "
          src={data.thumbnailUrl}
          alt="Thumbnail"
        />
        <div
          className="
              z-10
              bg-zinc-800
              p-2
              lg:p-4
              absolute
              w-full
              transition
              shadow-md
              rounded-b-md
              "
        >
          <div className=" flex flex-row items-center gap-3">
            {user ? (
              <div
                className="
                cursor-pointer
                w-6
                h-6
                lg:w-10
                lg:h-10
                bg-white
                rounded-full
                flex
                justify-center
                items-center
                transition
                hover:bg-neutral-300
                 "
                onClick={() => router.push(`/watch/${data?.id}`)}
              >
                <MdPlayArrow size={30} />
              </div>
            ) : (
              <div
                className="
                cursor-pointer
                w-6
                h-6
                lg:w-10
                lg:h-10
                bg-white
                rounded-full
                flex
                justify-center
                items-center
                transition
                hover:bg-neutral-300
                 "
                onClick={() => {}}
              >
                <MdPlayDisabled size={30} />
              </div>
            )}
            {user ? <FavoriteButton movieId={data?.id} /> : ""}
            <div
              onClick={() => openModal(data?.id)}
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
              <BiChevronDown className="text-white" size={30} />
            </div>
          </div>
          <p className="text-cyan-300 font-semibold mt-2">
            New <span className="text-white"> 2023</span>
          </p>
          <div className="hidden lg:flex flex-row mt-2 gap-4 items-center">
            <p className="text-zinc-300 text-sm font-semibold lg:text-lg">
              {data?.duration}
            </p>
            <p className="text-white text-sm font-semibold lg:text-lg">•</p>
            <p className="text-white text-sm font-semibold lg:text-lg">
              {data?.genre}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
