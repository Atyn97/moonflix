import useMovie from "@/hooks/useMovie";
import { useRouter } from "next/router";
import React from "react";

import { GoArrowLeft } from "react-icons/go";

const Watch = () => {
  const router = useRouter();
  const { movieId } = router.query;

  const { data } = useMovie(movieId as string);

  return (
    <div className="bg-black w-screen h-screen">
      <nav
        className="
      text-white
        w-full 
        p-4
        z-10
        fixed
        flex
        flex-row
        items-center
        gap-8
      bg-gradient-to-b from-black
        bg-opacitu-70
      "
      >
        <GoArrowLeft
          onClick={() => router.push("/")}
          className="text-white cursor-pointer"
          size={35}
        />
        <p className="text-white texl-1xl md:text-3xl font-bold">
          <span className="font-light">Watching: </span>
          {data?.title}
        </p>
      </nav>
      <video
        autoPlay
        controls
        className="h-full w-full"
        src={data?.videoUrl}
      ></video>
    </div>
  );
};

export default Watch;
