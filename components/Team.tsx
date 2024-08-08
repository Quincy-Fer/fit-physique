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
    <section className="h-screen bg-red-300" id="team">
      <div className="container mx-auto">
        <h2>Our Trainers</h2>
        {/* trainers grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12 mb-12">
          {trainerData.map((item, index) => {
            return (
              <div key={index}>
                {/* image  */}
                <div className="relative  w-[320px] h-[360px] mx-auto mb-4">
                  <Image src={item.image} alt="" fill />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Team;
