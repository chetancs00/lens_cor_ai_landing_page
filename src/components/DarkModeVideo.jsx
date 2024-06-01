"use client";

import React from "react";

const DarkModeVideo = () => {
  return (
    <div className="md:relative w-full h-full bg-black ">
        <div className="-z-20 sm:h-screen ">
      <video
        className="h-screen  md:w-full md:h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        // src="https://res.cloudinary.com/detwrhe0k/video/upload/v1691730947/lenscorp-website/pexels-pressmaster-3129671-3840x2160-30fps_1_ak5nsz_d7alrn.mp4"
      />
       </div>
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center z-20">
        <h1 className="text-4xl flex justify-center align-middle md:font-bold md:text-6xl text-primary mb-2 font-raleway">
          We are at the forefront of AI
        </h1>
        <p className="hidden md:block md:text-xl font-bold text-primary mb-2 mt-10 font-poppins">
          From Conserving Wildlife to Automatically Generating Caricatures
        </p>
        <span className="mb-4">
          <p className='hidden md:block md:font-bold md:text-primary  md:text-xl font-poppins'> - We Do It All</p>
        </span>
          <button className="learn-more-light bg-white text-black py-2 px-4 rounded z-100">
            Learn More
          </button>
      </div>
    </div>
  );
};

export default DarkModeVideo;
