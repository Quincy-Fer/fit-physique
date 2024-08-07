"use client";

import Link from "next/link";
import MobileNav from "./MobileNav";
import Nav from "./Nav";
import Image from "next/image";
import { useEffect, useState } from "react";
import { MdMenu } from "react-icons/md";

const Header = () => {
  const [headerActive, setHeaderActive] = useState(false);
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // detect scroll
      setHeaderActive(window.scrollY > 50);
    };

    //  add scroll event
    window.addEventListener("scroll", handleScroll);
    //  clear scroll event
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${
        headerActive ? "h-[100px]" : "h-[124px]"
      } fixed max-w-[1920px] top-0  w-full bg-primary-200 h-[100px] transition-all z-50 `}
    >
      <div className="container mx-auto h-full flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <Image
            src={"/images/logo.png"}
            alt="logo"
            width={117}
            height={55}
            priority={true}
          />
        </Link>
        {/* mobile nav hidden on desktop */}
        <MobileNav
          containerStyles={`${headerActive ? "top-[90px]" : "top-[124px]"} 
          ${
            openNav
              ? "max-h-max pt-8 pb-10 border-t border-white/10"
              : "max-h-0 pt-0 pb-0 overflow-hidden border-white/0"
          }
          flex flex-col text-center fixed gap-8 xl:hidden 
        left-0  text-base uppercase font-medium text-white bg-primary-200 transition-all w-full`}
        />
        {/* desktop nav hidden on mobile */}
        <Nav containerStyles="flex xl:flex gap-4 hidden text-white" />
        {/* hide/open menu button */}
        <div>
          <button onClick={()=> setOpenNav(!openNav)} className="text-white xl:hidden">
            <MdMenu className="text-4xl" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
