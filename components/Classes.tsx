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
    <section className="h-screen bg-green-300" id="class">
      Classes
    </section>
  );
};

export default Classes;
