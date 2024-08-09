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

// variants

const brandContainerVariant = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
      duration: 0.5,
      ease: "linear",
    },
  },
};

const brandItem = {
  hidden: {
    y: 20,
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.6, 0.3, 0.8],
    },
  },
};

const Brands = () => {
  return (
    <section className="py-8" id="contact">
      <div className="container mx-auto">
        <motion.div
          variants={brandContainerVariant}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="grid grid-cols-2 lg:grid-cols-5 py-8"
        >
          {brandImages.map((item, index) => {
            return (
              <motion.div variants={brandItem} key={index}>
                <Link href={item.href} className="group">
                  <Image
                    src={item.src}
                    width={204}
                    height={106}
                    alt=""
                    className="opacity-50 group-hover:opacity-100 transition-all mx-auto"
                  />
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Brands;
