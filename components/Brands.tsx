"use client";

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

const brandImages = [
  {
    src: "/images/icon.png",
    href: "",
  },
  {
    src: "/images/icon1.png",
    href: "",
  },
  {
    src: "/images/icon2.png",
    href: "",
  },
  {
    src: "/images/icon3.png",
    href: "",
  },
  {
    src: "/images/icon4.png",
    href: "",
  },
];

const Brands = () => {
  return (
    <section className="py-8" id="contact">
      <div className="container mx-auto">
        {brandImages.map((item, index) => {
          return (
            <div key={index}>
              <Link href={item.href} className="group">
                <Image
                  src={item.src}
                  width={204}
                  height={106}
                  alt=""
                  className="opacity-50 group-hover:opacity-100 transition-all mx-auto"
                />
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Brands;
