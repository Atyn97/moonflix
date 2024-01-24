import { useRouter } from "next/router";
import React from "react";

interface MobileMenuProps {
  visible?: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ visible }) => {
  const router = useRouter();

  const user = true;

  if (!visible) {
    return null;
  }

  return (
    <div className="bg-black w-56 absolute top-16 left-20 py-5 flex-col border-2 border-gray-800 flex">
      <div className="flex flex-col gap-4">
        <div
          onClick={() => router.push(`/`)}
          className="px-3 text-center text-white hover:underline"
        >
          Home
        </div>
        <div
          onClick={() => router.push(`/movies`)}
          className="px-3 text-center text-white hover:underline"
        >
          Movies
        </div>

        {user ? (
          <div
            onClick={() => router.push(`/favorites`)}
            className="px-3 text-center text-white hover:underline"
          >
            Favorites
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default MobileMenu;
