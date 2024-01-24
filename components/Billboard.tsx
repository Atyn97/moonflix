import PlayButton from "./PlayButton";
import useBillboard from "@/hooks/useBillboard";

const Billboard = () => {
  const { data } = useBillboard();

  return (
    <div className="relative h-[46.25vw] ">
      <video
        className="
        w-full
        h-[106.25vw]
        sm:h-[86.25vw]
        md:h-[66.25vw] 
        lg:h-[66vw] 
        xl:h-[56.25vw] 
        object-cover
        brightness-[60%]
        "
        autoPlay
        loop
        muted
        poster={data?.thumbnailUrl}
        src={data?.videoUrl}
      ></video>
      <div className="absolute top-[50%] md:top-[30%] ml-4 md:ml-16">
        <p className="text-cyan-300 font-semibold mt-3">
          New <span className="text-white"> 2023</span>
        </p>
        <p
          className="
        text-white
        text-3xl
        md:text-5xl
        h-full 
        w-[100%]
        md:w-[70%]
        lg:w-[80%]
        lg:text-6xl
        font-bold
        drop-shadow-xl
        cursor-pointer
        "
        >
          {data?.title}
        </p>

        <p
          className="
              text-white
              text-[10px]
              sm:text-sm
              md:text-md
              lg:text-lg
              mt-2
              md:mt-8
              w-[80%]
              md:w-[90%]
              lg:w-[50%]
              drop-shadow-xl
              "
        >
          {data?.description}
        </p>
        <div className="hidden md:flex flex-row items-center mt-1 md:mt-4 gap-3">
          <PlayButton movieId={data?.id} />
        </div>
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
  );
};

export default Billboard;
