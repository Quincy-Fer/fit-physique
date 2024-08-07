"use client";

// import slider react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/navigation";
import CustomButton from "./CustomButton";

const Heroslider = () => {
  return (
    <Swiper>
      <SwiperSlide className="h-full flex justify-end pt-48">
        <div>
          <h1 className="h1 text-center lg:text-left mb-2">
            <span>Where hard</span> work meets succes
          </h1>
          <p className="text-white italic text-center lg:text-left mb-4 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quo
            commodi doloribus.
          </p>
          <CustomButton
            text="Get Started"
            containerStyles="w-[196px] h-[62px] "
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Heroslider;
