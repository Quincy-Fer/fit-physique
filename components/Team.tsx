"use client";

import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import CustomButton from "./CustomButton";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";

const trainerData = [
  {
    image: "/images/david.jpg",
    name: "David Williams",
    role: "Bodybuilder Coach",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam, debitis?",
    social: [
      { icon: FaFacebook, href: "https://facebook.com" },
      { icon: FaTwitter, href: "https://twitter.com" },
      { icon: FaYoutube, href: "https://youtube.com" },
    ],
  },
  {
    image: "/images/rosy.jpg",
    name: "Rosy Rivers",
    role: "Bodybuilder Coach",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam, debitis?",
    social: [
      { icon: FaFacebook, href: "https://facebook.com" },
      { icon: FaTwitter, href: "https://twitter.com" },
      { icon: FaYoutube, href: "https://youtube.com" },
    ],
  },
  {
    image: "/images/matt.jpg",
    name: "Matt Stonewall",
    role: "Bodybuilder Coach",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam, debitis?",
    social: [
      { icon: FaFacebook, href: "https://facebook.com" },
      { icon: FaTwitter, href: "https://twitter.com" },
      { icon: FaYoutube, href: "https://youtube.com" },
    ],
  },
  {
    image: "/images/sofia.jpg",
    name: "Sofia Lauren",
    role: "Bodybuilder Coach",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam, debitis?",
    social: [
      { icon: FaFacebook, href: "https://facebook.com" },
      { icon: FaTwitter, href: "https://twitter.com" },
      { icon: FaYoutube, href: "https://youtube.com" },
    ],
  },
];

const Team = () => {
  return (
    <section className="py-12 xl:h-[110vh]" id="team">
      <div className="container mx-auto h-full flex flex-col justify-center items-center">
        <motion.h2
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="h2 text-center mb-6"
        >
          Our Trainers
        </motion.h2>
        {/* trainers grid */}
        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12 mb-12"
        >
          {trainerData.map((item, index) => {
            return (
              <div
                className="flex flex-col items-center text-center"
                key={index}
              >
                {/* image  */}
                <div className="relative  w-[320px] h-[360px] mx-auto mb-4">
                  <Image src={item.image} alt="" fill />
                </div>
                {/* text */}
                <div>
                  <h4 className="h4 mb-2">{item.name}</h4>
                  <p className="uppercase text-xs tracking-[3px] mb-2">
                    {item.role}
                  </p>
                  <p className="mb-6 max-w-[320px] mx-auto">
                    {item.description}
                  </p>
                  <div className="flex gap-12 justify-center">
                    {item.social.map((social, index) => {
                      return (
                        <div key={index}>
                          <Link
                            href={social.href}
                            className="hover:text-accent transition-all"
                          >
                            <social.icon className="text-lg" />
                          </Link>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
        {/* btn */}
        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
        >
          <CustomButton
            text="See All Trainers"
            containerStyles="w-[196px] h-[62px]"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
