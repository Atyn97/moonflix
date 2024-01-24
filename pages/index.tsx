import Billboard from "@/components/Billboard";
import Footer from "@/components/Footer";
import InfoModal from "@/components/InfoModal";
import MovieList from "@/components/MovieList";
import Navbar from "@/components/Navbar";
import useInfoModal from "@/hooks/useInfoModal";
import useMovieList from "@/hooks/useMovieList";
import { NextPageContext } from "next";
import { getSession } from "next-auth/react";

export async function getServerSideProps(context: NextPageContext) {
  return {
    props: {},
  };
}
export default function Home() {
  const { data: movies = [] } = useMovieList();
  const { isOpen, closeModal } = useInfoModal();

  return (
    <>
      <InfoModal visible={isOpen} onClose={closeModal} />
      <Navbar />
      <Billboard />
      <div
        className="
          absolute
          top-[35%]
          xs:top-[40%]
          sm:top-[35%]
          md:top-[60%]
          lg:top-[70%]
          xl:top-[80%]
          bg-gradient-to-t from-black from-90%
          justify-between
            "
      >
        <MovieList data={movies} title="Trending now" />
        <Footer />
      </div>
    </>
  );
}
