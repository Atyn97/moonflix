import Billboard from "@/components/Billboard";
import Footer from "@/components/Footer";
import InfoModal from "@/components/InfoModal";
import MovieList from "@/components/MovieList";
import Navbar from "@/components/Navbar";
import useInfoModal from "@/hooks/useInfoModal";
import useUserModal from "@/hooks/useUserModal";
import useMovieList from "@/hooks/useMovieList";
import useFavorites from "@/hooks/useFavorites";
import UserModal from "@/components/UserModal";
import useCurrentUser from "@/hooks/useCurrentUser";

export default function Home() {
  const { data: movies = [] } = useMovieList();
  const { data: favorites = [] } = useFavorites();
  const { isOpen, closeModal } = useInfoModal();
  const { open, closeIt } = useUserModal();
  const { data: user } = useCurrentUser();

  return (
    <>
      {!user && <UserModal visible={open} onClose={closeIt} />}
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
        <MovieList data={favorites} title="My Favorites" />
        <Footer />
      </div>
    </>
  );
}
