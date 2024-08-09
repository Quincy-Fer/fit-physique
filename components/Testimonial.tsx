"use client";

import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";

//  import swiper components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination } from "swiper/modules";

// swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";

// data

const testimonialData = [
  {
    img: "/images/lucy.jpg",
    message:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi, sint!",
    name: "Lucy Anthony",
  },
  {
    img: "/images/michael.jpg",
    message:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi, sint!",
    name: "Michael Phillips",
  },
  {
    img: "/images/maria.jpg",
    message:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi, sint!",
    name: "Maria Garcia",
  },
  {
    img: "/images/lucy.jpg",
    message:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi, sint!",
    name: "Lucy Anthony",
  },
  {
    img: "/images/michael.jpg",
    message:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi, sint!",
    name: "Michael Phillips",
  },
  {
    img: "/images/maria.jpg",
    message:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi, sint!",
    name: "Maria Garcia",
  },
];

const Testimonial = () => {
  return (
    <section className="h-[50vh] bg-indigo-300" id="testimonial">
      Testimonial
    </section>
  );
};

export default Testimonial;
