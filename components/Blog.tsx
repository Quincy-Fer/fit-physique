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

const blogData = [
  {
    img: '/images/postitem1.jpg',
    data: 'August 9, 2024',
    title: 'Maintain a perfect structure after workout',
    href: ''
  },
  {
    img: '/images/postitem2.jpg',
    data: 'August 9, 2024',
    title: 'Maintain a perfect structure after workout',
    href: ''
  },
  {
    img: '/images/postitem3.jpg',
    data: 'August 9, 2024',
    title: 'Maintain a perfect structure after workout',
    href: ''
  },
  {
    img: '/images/postitem4.jpg',
    data: 'August 9, 2024',
    title: 'Maintain a perfect structure after workout',
    href: ''
  },
  {
    img: '/images/postitem5.jpg',
    data: 'August 9, 2024',
    title: 'Maintain a perfect structure after workout',
    href: ''
  },
  {
    img: '/images/postitem6.jpg',
    data: 'August 9, 2024',
    title: 'Maintain a perfect structure after workout',
    href: ''
  },
  {
    img: '/images/postitem7.jpg',
    data: 'August 9, 2024',
    title: 'Maintain a perfect structure after workout',
    href: ''
  },
  {
    img: '/images/postitem8.jpg',
    data: 'August 9, 2024',
    title: 'Maintain a perfect structure after workout',
    href: ''
  },
]

const Blog = () => {
  return <section className="h-screen bg-emerald-300" id="blog">Blog</section>;
};

export default Blog;
