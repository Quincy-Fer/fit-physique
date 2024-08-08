"use client";

import CountUp from "react-countup";
import { FaBriefcase, FaClock, FaTrophy } from "react-icons/fa";
import { ImUsers } from "react-icons/im";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  {
    number: 19,
    icon: FaBriefcase,
    text: "training courses",
  },
  {
    number: 879,
    icon: FaClock,
    text: "working hours",
  },
  {
    number: 150,
    icon: ImUsers,
    text: "happy customers",
  },
  {
    number: 9,
    icon: FaTrophy,
    text: "international awards",
  },
];

const Achievements = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div>
          {stats.map((item, index) => {
            return (
              <div key={index}>
                {/* circle outer */}
                <div
                  className="border border-accent/90 w-[140px] h-[140px] mx-auto rounded-full
                p-1 mb-6"
                >
                  {/* circle inner and counter */}
                  <div
                    className="border border-accent/30 w-full h-full flex items-center 
                    justify-center text-5xl rounded-full"
                  >
                    <CountUp start={0} end={item.number} duration={6} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
