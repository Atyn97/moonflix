import useCurrentUser from "@/hooks/useCurrentUser";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useCallback, useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

interface UserModalProps {
  visible?: boolean;
  onClose: any;
}

const UserModal: React.FC<UserModalProps> = ({ visible, onClose }) => {
  const [isVisible, setIsVisible] = useState(!!visible);
  const router = useRouter();

  useEffect(() => {
    setIsVisible(!!visible);
  }, [visible]);

  const handleClose = useCallback(() => {
    setIsVisible(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [onClose]);

  if (!visible) {
    return null;
  }

  return (
    <div
      className="
        z-50
        transition
        duration-300
        bg-black
        bg-opacity-80
        flex
        justify-center
        items-center
        overflow-x-hidden
        overflow-y-auto
        fixed
        inset-0"
    >
      <div
        className="
          relative
          w-[90%]
          md:w-auto
          mx-auto
          max-w-3xl
          rounded-md
          overflow-hidden
          "
      >
        <div
          className={`
          ${isVisible ? "scale-100" : "scale-0"}
          transform
          duration-300
          relative
          flex-auto
          bg-zinc-900
          drop-shadow-md`}
        >
          <div className="relative h-full w-full items-center justify-center">
            <div className="px-10 md:px-16 py-4 md:py-8">
              <h1
                className="
                text-white 
                uppercase
                text-sm md:text-lg lg:text-xl 
                "
              >
                Watch this movie and more on Moonflix
              </h1>
              <div className="py-4 flex flex-row gap-4 items-center justify-center">
                <button
                  className="
                flex
                flex-row
                items-center 
                bg-white/50
                text-xs sm:text-lg md:text-xl
                font-semibold
                rounded-md
                px-2 md:px-5
                py-2 
                hover:bg-neutral-300
                "
                  onClick={() => router.push(`/`)}
                >
                  Start your free trial
                </button>
                <button
                  className="
                flex
                flex-row
                items-center 
                bg-cyan-300
                text-xs sm:text-lg md:text-xl
                font-semibold
                rounded-md
                px-2 md:px-5
                py-2
                hover:bg-cyan-500
                "
                  onClick={() => signIn()}
                >
                  Sign up now
                </button>
              </div>
              <div className="flex gap-1 items-center justify-center">
                <p className="text-white text-sm md:text-lg lg:text-xl ">
                  Already subscried?{" "}
                </p>
                <span
                  onClick={() => signIn()}
                  className="text-cyan-400 hover:text-cyan-500 cursor-pointer"
                >
                  {" "}
                  Sign in now
                </span>
              </div>
            </div>
            <div
              className="
            cursor-pointer
            absolute
            top-3
            right-3
            h-8
            w-8
            rounded-full
            bg-black
            bg-opacity-70
            flex
            items-center
            justify-center
            "
              onClick={handleClose}
            >
              <AiOutlineClose className="text-white " size={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserModal;
