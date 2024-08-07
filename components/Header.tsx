import Link from "next/link";
import MobileNav from "./MobileNav";
import Nav from "./Nav";
import Image from "next/image";

const Header = () => {
  return (
    <header className="fixed left-0 right-0 w-full bg-primary-200 h-[90px]">
      <div className="container mx-auto">
        {/* Logo */}
        <Link href="/">
          <Image src={"/images/logo.png"} alt="logo" width={117} height={55} />
        </Link>
        {/* mobile nav hidden on desktop */}
        <MobileNav containerStyles="xl:hidden" />
        {/* desktop nav hidden on mobile */}
        <Nav containerStyles="flex xl:flex gap-4 hidden" />
      </div>
    </header>
  );
};

export default Header;
