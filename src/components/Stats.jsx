'use client';
import React from "react";

const StatsSection = () => {
  return (
    <div className="py-16 bg-blue-900 dark:bg-[#1b1c1e] text-white family-poppins font-display">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-12">By the numbers</h2>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-16">
          <div className="flex flex-col items-center">
            <span className="md:text-5xl text-4xl font-bold">15<span className="text-blue-500 dark:text-[#585858]">+</span></span>
            <span className="md:text-lg text-base mt-2">Solutions for <br /> Global crises</span>
          </div>
          <div className="hidden md:block h-16 border-l-2 border-white"></div>
          <div className="flex flex-col items-center">
            <span className="md:text-5xl text-4xl font-bold">10<span className="text-blue-500 dark:text-[#585858]">+</span></span>
            <span className="md:text-lg text-base mt-2">University <br /> Collaborations</span>
          </div>
          <div className="hidden md:block h-16 border-l-2 border-white"></div>
          <div className="flex flex-col items-center">
            <span className="md:text-5xl text-4xl font-bold">25<span className="text-blue-500 dark:text-[#585858]">+</span></span>
            <span className="md:text-lg text-base mt-2">Employees <br /> Worldwide</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
