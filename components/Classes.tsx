"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";
import CustomButton from "./CustomButton";

const classes = [
  {
    name: "body building",
    img: "/images/bodybuilding.jpg",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit.\
     Vitae eaque sapiente expedita sit laudantium officiis!",
  },
  {
    name: "cardio",
    img: "/images/cardio.jpg",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit.\
     Vitae eaque sapiente expedita sit laudantium officiis!",
  },
  {
    name: "fitness",
    img: "/images/fitness.jpg",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit.\
     Vitae eaque sapiente expedita sit laudantium officiis!",
  },
  {
    name: "crossfit",
    img: "/images/crossfit.jpg",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit.\
     Vitae eaque sapiente expedita sit laudantium officiis!",
  },
];

const Classes = () => {
  return (
    <section id="class">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {classes.map((item, index) => {
          return (
            <div
              className="relative w-full h-[300px] lg:h-[485px] flex flex-col 
              justify-center items-center"
              key={index}
            >
              {/* overlay */}
              <div className="bg-black/40 absolute w-full h-full top-0 z-10"></div>
              <Image src={item.img} fill className="object-cover" alt="" />
              {/* text and button */}
              <div className="z-30 text-center w-[380px] flex flex-col items-center justify-center gap-4 ">
                <h3 className="h3 text-accent">{item.name}</h3>
              </div>
             
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Classes;
