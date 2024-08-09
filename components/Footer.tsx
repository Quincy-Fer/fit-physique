"use client";

import Image from "next/image";
import Link from "next/link";

import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaFacebook,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

import CustomButton from "./CustomButton";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-primary-300 pt-24">
      <div className="container mx-auto pb-24">
        <div className="text-white grid grid-cols-1 xl:grid-cols-4 gap-x-8 gap-y-12">
          {/* info */}
          <div className="flex flex-col gap-4">
            <Link href="#">
              <Image src={"/images/logo.png"} width={117} height={55} alt="" />
            </Link>
            <p className="max-w-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
              assumenda.
            </p>
            <ul className="flex flex-col gap-4">
              <li className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-xl text-accent" />
                <span>Elysium 1, FlavorTown</span>
              </li>
              <li className="flex items-center gap-4">
                <FaPhoneAlt className="text-xl text-accent" />
                <span>123-456-789</span>
              </li>
              <li className="flex items-center gap-4">
                <FaEnvelope className="text-xl text-accent" />{" "}
                <Link href="#">
                  <span>sayhello@gmail.com</span>
                </Link>
              </li>
            </ul>
          </div>
          {/* blog */}
          <div>
            <h4 className="h4 text-accent mb-4">Recent Blog Post</h4>
            {/* post */}
            <div className="border-b  border-gray-400 flex flex-col gap-3 pb-3 mb-4  ">
              <Link href="#" className="hover:text-accent transition-all">
                <h5 className="h5 leading-snug">
                  How To Stay Motivated For All Exercises
                </h5>
              </Link>
              <p className="text-gray-400 text-[12px] tracking-[3px] uppercase">
                August 9, 2024
              </p>
            </div>
            {/* post */}
            <div className="border-b  border-gray-400 flex flex-col gap-3 pb-3 mb-4  ">
              <Link href="#" className="hover:text-accent transition-all">
                <h5 className="h5 leading-snug">
                  How To Stay Motivated For All Exercises
                </h5>
              </Link>
              <p className="text-gray-400 text-[12px] tracking-[3px] uppercase">
                August 9, 2024
              </p>
            </div>
            {/* post */}
            <div className="border-b  border-gray-400 flex flex-col gap-3 pb-3 mb-4  ">
              <Link href="#" className="hover:text-accent transition-all">
                <h5 className="h5 leading-snug">
                  How To Stay Motivated For All Exercises
                </h5>
              </Link>
              <p className="text-gray-400 text-[12px] tracking-[3px] uppercase">
                August 9, 2024
              </p>
            </div>
          </div>
          {/* gallery */}
          <div>
            <h4 className="h4 text-accent mb-4">Gallery</h4>
            {/* gallery images */}
            <div className="flex flex-wrap gap-2">
              <Link href="#">
                <Image
                  src={"/images/david.jpg"}
                  width={100}
                  height={100}
                  alt=""
                />
              </Link>
              <Link href="#">
                <Image
                  src={"/images/matt.jpg"}
                  width={100}
                  height={100}
                  alt=""
                />
              </Link>
              <Link href="#">
                <Image
                  src={"/images/rosy.jpg"}
                  width={100}
                  height={100}
                  alt=""
                />
              </Link>
              <Link href="#">
                <Image
                  src={"/images/maria.jpg"}
                  width={100}
                  height={100}
                  alt=""
                />
              </Link>
              <Link href="#">
                <Image
                  src={"/images/michael.jpg"}
                  width={100}
                  height={100}
                  alt=""
                />
              </Link>
              <Link href="#">
                <Image
                  src={"/images/sofia.jpg"}
                  width={100}
                  height={100}
                  alt=""
                />
              </Link>
            </div>
          </div>
          {/* newsletter */}
          <div><h4 className="h4 text-accent">Newsletter</h4></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
