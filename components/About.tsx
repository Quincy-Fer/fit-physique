"use client";

import { FaUsers } from "react-icons/fa";
import { IoIosPricetags } from "react-icons/io";
import { FaDumbbell } from "react-icons/fa6";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";
import Achievements from "./Achievements";

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
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa recusandae aut beatae cumque mollitia vero suscipit. ",
  },
];

const About = () => {
  return (
    <section className="pt-8 pb-14 lg:pt-16 lg:pb-28" id="about">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-2 mb-8">
          <h2 className="h2 text-center">About Us</h2>
          <p className="max-w-[600px] mx-auto text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            facere, dicta fugiat voluptatem tempore illum.
          </p>
        </div>
        {/* featured items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {featured.map((feature, index) => {
            return (
              <div
                key={index}
                className="flex flex-col justify-center items-center gap-4 border p-10"
              >
                <div
                  className="text-4xl bg-primary-300 text-white w-[80px] h-[80px] 
                rounded-full flex justify-center items-center"
                >
                  {feature.icon}
                </div>
                <div className="flex flex-col justify-center items-center gap-2 text-center">
                  <h4 className="h4 text-accent"> {feature.title} </h4>
                  <p>{feature.subtitle}</p>
                </div>
              </div>
            );
          })}
        </div>
        {/* achievements */}
        <Achievements />
      </div>
    </section>
  );
};

export default About;
