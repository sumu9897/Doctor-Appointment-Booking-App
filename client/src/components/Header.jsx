import React from "react";
import { assets } from "../assets/assets";

const Header = () => {
  return (
    <header className="flex flex-col md:flex-row  justify-between bg-primary text-white rounded-2xl px-6 md:px-10 lg:px-20 overflow-hidden shadow-lg">
      {/* Left Section */}
      <div className="md:w-1/2 flex flex-col justify-center gap-6 py-12 md:py-[8vw]">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
          Book an Appointment <br /> with Trusted Doctors
        </h1>

        <div className="flex items-center gap-4">
          <img
            className="w-24 md:w-28 rounded-full"
            src={assets.group_profiles}
            alt="Group of patients who booked appointments"
          />
          <p className="text-sm md:text-base font-medium">
            Over <span className="font-semibold text-yellow-300">20,000+</span> people have booked appointments
          </p>
        </div>

        <a
          href="#speciality"
          className="inline-flex items-center gap-3 bg-white text-gray-700 font-medium px-8 py-3 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 w-fit"
        >
          Book Appointment
          <img
            className="w-4"
            src={assets.arrow_icon}
            alt="Arrow icon leading to booking section"
          />
        </a>
      </div>

      {/* Right Section */}
      <div className="md:w-1/2 relative flex justify-center md:justify-end">
        <img
          className="w-full md:absolute bottom-0 h-auto rounded-lg'"
          src={assets.header_img}
          alt="Doctor consulting with patient"
        />
      </div>
    </header>
  );
};

export default Header;
