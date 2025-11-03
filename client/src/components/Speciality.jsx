import React from "react";
import { specialityData } from "../assets/assets";
import { Link } from "react-router-dom";

const Speciality = () => {
  return (
    <section
      id="speciality"
      className="flex flex-col items-center gap-6 py-20 bg-gray-50 text-gray-800"
    >
      {/* Section Header */}
      <div className="text-center space-y-3 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-primary">
          Find by Speciality
        </h2>
        <p className="text-sm md:text-base text-gray-600 max-w-md mx-auto">
          Browse through our trusted list of medical specialists and book your
          appointment with ease.
        </p>
      </div>

      {/* Speciality Grid / Scroll */}
      <div className="flex sm:justify-center gap-6 pt-8 w-full overflow px-4 scrollbar-hide">
        {specialityData.map((item, index) => (
          <Link
            key={index}
            to={`/doctors/${item.speciality}`}
            onClick={() => scrollTo(0, 0)}
            className="flex flex-col items-center bg-white hover:bg-primary/10 rounded-xl shadow-sm hover:shadow-md p-4 transition-all duration-300 cursor-pointer flex-shrink-0 min-w-[100px] sm:min-w-[140px]"
          >
            <img
              src={item.image}
              alt={`${item.speciality} icon`}
              className="w-16 sm:w-24 mb-3 object-contain"
            />
            <p className="text-sm font-medium text-center capitalize">
              {item.speciality}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Speciality;
