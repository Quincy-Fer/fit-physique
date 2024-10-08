"use client";

// import slider react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/navigation";
// components
import CustomButton from "./CustomButton";
import SwiperNavButtons from "./SwiperNavButtons";

// animation
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";
import Image from "next/image";
import Link from "next/link";

const blogData = [
  {
    img: "/images/blog1.jpg",
    data: "August 9, 2024",
    title: "Maintain a perfect structure after workout",
    href: "",
  },
  {
    img: "/images/blog2.jpg",
    data: "August 9, 2024",
    title: "Maintain a perfect structure after workout",
    href: "",
  },
  {
    img: "/images/blog3.jpg",
    data: "August 9, 2024",
    title: "Maintain a perfect structure after workout",
    href: "",
  },
  {
    img: "/images/blog4.jpg",
    data: "August 9, 2024",
    title: "Maintain a perfect structure after workout",
    href: "",
  },
  {
    img: "/images/blog5.jpg",
    data: "August 9, 2024",
    title: "Maintain a perfect structure after workout",
    href: "",
  },
  {
    img: "/images/blog6.jpg",
    data: "August 9, 2024",
    title: "Maintain a perfect structure after workout",
    href: "",
  },
  {
    img: "/images/blog7.jpg",
    data: "August 9, 2024",
    title: "Maintain a perfect structure after workout",
    href: "",
  },
  {
    img: "/images/blog8.jpg",
    data: "August 9, 2024",
    title: "Maintain a perfect structure after workout",
    href: "",
  },
];

const Blog = () => {
  return (
    <section className="bg-primary-300 text-white py-24" id="blog">
      <div className="container mx-auto">
        <motion.h2
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="h2 text-center mb-8"
        >
          Blogs
        </motion.h2>
        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
        >
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 15,
              },
              1400: {
                slidesPerView: 4,
                spaceBetween: 15,
              },
            }}
            className="h-[420px] md:max-w-[660px] lg:max-w-none mb-8"
          >
            {blogData.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="flex flex-col justify-start h-full max-w-[320px] mx-auto">
                    <Image
                      src={item.img}
                      width={320}
                      height={266}
                      alt=""
                      className="mb-6"
                    />
                    <div className="flex flex-col items-start">
                      <p className="max-w-[380px] uppercase text-[12px] tracking-[3px] mb-1">
                        {item.data}
                      </p>
                      <Link
                        href={item.href}
                        className="hover:text-accent transition-all duration-300"
                      >
                        <h5 className="h5">{item.title}</h5>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
            <SwiperNavButtons
              containerStyles="absolute left-0 right-0 bottom-[16rem] w-full 
              max-w-[370px] sm:max-w-[370px] md:max-w-[960px] xl:max-w-[1320px]
               mx-auto z-50 flex justify-between gap-1"
              btnStyles="bg-accent text-white w-[56px] h-[56px] flex justify-center items-center hover:bg-black
              transition-all duration-300"
              iconStyles="text-2xl "
            />
          </Swiper>
        </motion.div>
        <motion.div
          variants={fadeIn("up", 0.8)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
        >
          <CustomButton
            text="View All"
            containerStyles="block w-[196px] h-[62px] mx-auto"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
