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
    image: "/images/david.rosy",
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
      Team
    </section>
  );
};

export default Team;
