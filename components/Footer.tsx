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
          <div className="bg-pink-300/20">Blog</div>
          {/* gallery */}
          <div className="bg-pink-300/20">Gallery</div>
          {/* newsletter */}
          <div className="bg-pink-300/20">newsletter</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
