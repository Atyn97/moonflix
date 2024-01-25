import Footer from "@/components/Footer";
import InfoModal from "@/components/InfoModal";
import MovieList from "@/components/MovieList";
import Navbar from "@/components/Navbar";
import UserModal from "@/components/UserModal";
import useCurrentUser from "@/hooks/useCurrentUser";
import useInfoModal from "@/hooks/useInfoModal";
import useMovieList from "@/hooks/useMovieList";
import useUserModal from "@/hooks/useUserModal";

export default function Movie() {
  const { data: movies = [] } = useMovieList();
  const { isOpen, closeModal } = useInfoModal();
  const { open, closeIt } = useUserModal();
  const { data: user } = useCurrentUser();

  return (
    <>
      {!user && <UserModal visible={open} onClose={closeIt} />}
      <InfoModal visible={isOpen} onClose={closeModal} />
      <Navbar />
      <div className="pt-32">
        <MovieList data={movies} title="All movies" />
      </div>
    </>
  );
}
