import React, { useCallback, useEffect, useState } from "react";
import NavbarItem from "./NavbarItem";

import { BsChevronDown, BsSearch, BsBell } from "react-icons/bs";
import AccountMenu from "./AccountMenu";
import MobileMenu from "./MobileMenu";
import NotificationMenu from "./NotificationMenu";
import { useRouter } from "next/router";

const TOP_OFFSET = 66;

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showAccountMenu, setShowAccountMenu] = useState(false);
  const [showNotificationMenu, setShowNotificationMenu] = useState(false);
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > TOP_OFFSET) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const user = true;

  const router = useRouter();

  const toggleMobileMenu = useCallback(() => {
    setShowMobileMenu((prev) => !prev);
    setShowAccountMenu(false);
    setShowNotificationMenu(false);
  }, []);

  const toggleAccountMenu = useCallback(() => {
    setShowAccountMenu((prev) => !prev);
    setShowNotificationMenu(false);
    setShowMobileMenu(false);
  }, []);

  const toggleNotificationMenu = useCallback(() => {
    setShowNotificationMenu((prev) => !prev);
    setShowAccountMenu(false);
    setShowMobileMenu(false);
  }, []);

  return (
    <nav className="w-full fixed z-40 bg-gradient-to-b from-zinc-900  ...">
      <div
        className={`px-4 md:px-12 py-2 flex flex-row items-center cursor-pointer gap-2 transiton duration-500 ${
          showBackground ? "bg-black bg-opacity-90" : ""
        }`}
      >
        <img
          onClick={() => router.push(`/`)}
          className="h-12 w-12"
          src="/images/moonflix.png"
          alt="Logo"
        />
        <h1
          onClick={() => router.push(`/`)}
          className="text-white font-bold text-md md:text-lg cursor-pointer"
        >
          MOONFLIX
        </h1>
        <div className="flex-row ml-8 gap-7 hidden lg:flex 	text-transform capitalize">
          <NavbarItem label="home" />
          {/* <NavbarItem label="series" /> */}
          <NavbarItem label="movies" />
          {user ? <NavbarItem label="favorites" /> : ""}
        </div>
        <div
          onClick={toggleMobileMenu}
          className="lg:hidden flex flex-row gap-2 ml-8 cursor-pointer items-center"
        >
          <p className="text-white transition">Browse</p>
          <BsChevronDown
            className={`text-white transition mt-1 ${
              showMobileMenu ? "rotate-180" : "rotate-0"
            }`}
          />
          <MobileMenu visible={showMobileMenu} />
        </div>
        <div className="flex flex-row ml-auto gap-7 items-center  mt-2">
          <div className="hidden md:flex text-gray-200 hover:text-gray-300 cursor-pointer">
            <BsSearch />
          </div>
          {user ? (
            <div
              onClick={toggleNotificationMenu}
              className="text-gray-200 hover:text-gray-300 cursor-pointer"
            >
              <BsBell
                className={`text-white transition ${
                  showNotificationMenu ? "rotate-45" : "y-0"
                }`}
              />
              <NotificationMenu visible={showNotificationMenu} />
            </div>
          ) : (
            ""
          )}
          <div
            onClick={toggleAccountMenu}
            className="flex flex-row items-center gap-2 cursor-pointer relative"
          >
            <div className="w-6 h-6 lg:w-8 lg:h-8 rounded-full overflow-hidden">
              <img src="/images/user.png" alt="" />
            </div>
            <BsChevronDown
              className={`text-white transition ${
                showAccountMenu ? "rotate-180" : "rotate-0"
              }`}
            />
            <AccountMenu visible={showAccountMenu} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
