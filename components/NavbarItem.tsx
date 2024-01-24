import { useRouter } from "next/router";
import React from "react";

interface NavbarItemProps {
  label: string;
}

const NavbarItem: React.FC<NavbarItemProps> = ({ label }) => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/${label === "home" ? "/" : label}`)}
      className="text-white text-md cursor-pointer hover:text-gray-300"
    >
      {label}
    </div>
  );
};

export default NavbarItem;
