import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className=" text-white flex flex-col pt-20 bg-gradient-to-t from-zinc-900  ...">
      <div className="flex flex-row justify-center gap-40 pb-10 text-sm">
        <div className="flex flex-col gap-2">
          <span className="pb-3 font-semibold">Links</span>
          <Link href="/">Homepage</Link>
          <Link href="/">Privacy</Link>
          <Link href="/about">Legal Notice</Link>
          <Link href="/contact">Contact Us</Link>
        </div>
        <div className="flex flex-col gap-2">
          <span className="pb-3 font-semibold">Social</span>
          <Link href="/">Facebook</Link>
          <Link href="/">Instagram</Link>
          <Link href="/">Tiktok</Link>
          <Link href="/">Youtube</Link>
        </div>
        <div className="flex flex-col gap-2">
          <span className="pb-3 font-semibold">Preference</span>
          <Link href="/">Gift Cards</Link>
          <Link href="/">Netflix Shop</Link>
          <Link href="/">Cookies Preferences</Link>
        </div>
        <div className="flex flex-col gap-2">
          <span className="pb-3 font-semibold">Media</span>
          <Link href="/">Media Centre</Link>
          <Link href="/">Term of Use</Link>
          <Link href="/">Impressum</Link>
        </div>
      </div>
      <hr />

      <div className="flex flex-row items-center justify-between h-12 md:h-24 p-4 lg:px-20 xl:px-40">
        <Link href="/" className="font-bold text-lg">
          MOONFLIX
        </Link>
        <p className="text-md">© ALL RIGHTS RESERVED.</p>
      </div>
    </div>
  );
};

export default Footer;
