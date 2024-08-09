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
        <h2 className="h2 text-center mb-8">Blogs</h2>
        <div>
          <Swiper>
            {blogData.map((item, index) => {
              return <SwiperSlide key={index}>
                <div>
                  <Image src={item.img} width={320} height={266} alt="" className="mb-6" />
                </div>
              </SwiperSlide>;
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Blog;
