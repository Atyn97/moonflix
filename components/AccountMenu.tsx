import useCurrentUser from "@/hooks/useCurrentUser";
import { signIn, signOut } from "next-auth/react";
import React from "react";

interface AccountMenuProps {
  visible?: boolean;
}

const AccountMenu: React.FC<AccountMenuProps> = ({ visible }) => {
  const { data: user } = useCurrentUser();

  if (!visible) {
    return null;
  }

  return (
    <div className="bg-black w-56 absolute top-10 right-1 ring-0 py-5 flex-col border-2 border-gray-800 flex">
      <div className="flex flex-col gap-3">
        {user ? (
          <div className="px-3 group/item flex flex-row gap-3 items-center w-full">
            <img className="w-8 h-8 rounded-md" src="/images/user.png" alt="" />
            <p className="text-white text-sm group-hover/item:underline">
              {user?.name}
            </p>
          </div>
        ) : (
          <div
            onClick={() => signIn()}
            className="px-3 text-center text-white text-sm hover:underline"
          >
            Create an account
          </div>
        )}
        <hr className="bg-gray-600 border-0 h-px my-2 " />
        {user ? (
          <div
            onClick={() => signOut()}
            className="px-3 text-center text-white text-sm hover:underline"
          >
            Sign out of Moonflix
          </div>
        ) : (
          <div
            onClick={() => signIn()}
            className="px-3 text-center text-white text-sm hover:underline"
          >
            Sign in your Moonflix account
          </div>
        )}
      </div>
    </div>
  );
};

export default AccountMenu;
