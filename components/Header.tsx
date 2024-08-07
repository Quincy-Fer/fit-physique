"use client";

import Link from "next/link";
import MobileNav from "./MobileNav";
import Nav from "./Nav";
import Image from "next/image";
import { useEffect, useState } from "react";

const Header = () => {
  const [headerActive, setHeaderActive] = useState(false);

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
      } fixed max-w-[1920px] top-0  w-full bg-primary-200 h-[100px] transition-all z-50`}
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
        <MobileNav containerStyles="xl:hidden text-white" />
        {/* desktop nav hidden on mobile */}
        <Nav containerStyles="flex xl:flex gap-4 hidden text-white" />
      </div>
    </header>
  );
};

export default Header;
