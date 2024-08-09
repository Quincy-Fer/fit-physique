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
    <section className="py-12 xl:py-28" id="testimonial">
      <div className="container mx-auto">
        <motion.h2
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="h2 text-center"
        >
          What others say
        </motion.h2>
        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
        >
          <Swiper
            className="h-[320px]"
            slidesPerView={1}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
          >
            {testimonialData.map((item, index) => {
              return (
                <SwiperSlide key={index} className="h-full">
                  <div className="flex flex-col justify-center items-center gap-6 text-center h-full">
                    <Image
                      src={item.img}
                      width={90}
                      height={90}
                      alt=""
                      className="rounded-full border-2 border-accent"
                    />
                    <div className="flex flex-col justify-center items-center">
                      <FaQuoteLeft className="text-2xl text-accent" />
                      <p className="max-w-[380px] mb-4">{item.message}</p>
                      <span className="text-2xl text-black">{item.name}</span>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonial;
