import React from "react";

const AnimatedBox = ({ title, value }) => {
  return (
    <div className="relative overflow-hidden rounded-lg border-l-4 border-orange-500 bg-[#252525] p-6 group cursor-pointer">
      {/* Animated background span */}
      <span className="absolute bottom-0 left-0 w-56 h-48 rounded bg-orange-500 translate-x-full translate-y-full mb-9 ml-9 transition-all duration-500 ease-out group-hover:translate-x-0 group-hover:translate-y-0 group-hover:mb-32 group-hover:ml-0"></span>
      
      {/* Content */}
      <div className="relative z-10 text-center">
        <h3 className="text-gray-300 text-base mb-2 group-hover:text-white transition-colors duration-300">
          {title}
        </h3>
        <div className="text-3xl font-bold text-white group-hover:text-white transition-colors duration-300">
          {value}
        </div>
      </div>
    </div>
  );
};

export default AnimatedBox;
