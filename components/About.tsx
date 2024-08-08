"use client";

import { FaUsers } from "react-icons/fa";
import { IoIosPricetags } from "react-icons/io";
import { FaDumbbell } from "react-icons/fa6";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";

const featured = [
  {
    icon: <FaUsers />,
    title: "award winning trainers",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa recusandae aut beatae cumque mollitia vero suscipit.",
  },
  {
    icon: <IoIosPricetags />,
    title: "excellent trainers",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa recusandae aut beatae cumque mollitia vero suscipit.",
  },
  {
    icon: <FaDumbbell />,
    title: "modern equipment",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa recusandae aut beatae cumque mollitia vero suscipit.",
  },
];

const About = () => {
  return (
    <section className="pt-8 pb-14 lg:pt-16 lg:pb-28" id="about">
      <div className="container mx-auto">
        <div>
          <h2>About Us</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            facere, dicta fugiat voluptatem tempore illum.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
