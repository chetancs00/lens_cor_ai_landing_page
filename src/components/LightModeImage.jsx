'use client';
import React from 'react'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";


const LightModeImage = () => {


  useGSAP(() => {
    gsap.from(".light-img", {
      y: -30,
      repeat: false,
      yoyo: 0,
      // rotation: 360,
      duration: 1,
      opacity: 0,
      ease: "power1.inOut",
    });
    gsap.from(".image-hero-wrapper", {
      y: -40,
      repeat: false,
      yoyo: 0,
      // rotation: 360,
      duration: 1.5,
      stagger: 0.15,
      opacity: 0,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <div>
        <img
        className='light-img'
        height="100%"
        width="99.9%"
        style={{height: "100vh"}}
        src="https://lenscorp.ai/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdetwrhe0k%2Fimage%2Fupload%2Fv1691730929%2Flenscorp-website%2FDesktop_-_23_u3ypg0.jpg&w=128&q=75"/>
        <div className="absolute top-0   h-full flex flex-col items-center justify-center  z-10 leading-4">
            <div className="image-hero-wrapper mb-6">
            <h1 className="text-5xl flex justify-center align-middle md:font-weight-600 md:text-6xl text-black font-raleway ">
          We are at the forefront of AI
        </h1>
        </div>
        <div className="image-hero-wrapper mb-6">
        <p className="hidden md:block text-xl font-semi-bold text-black  font-poppins  text-start md:ml-12">
          From Conserving Wildlife to Automatically Generating Caricatures -We Do It All
        <span className="hidden md:block font-bold text-black  text-xl font-poppins">
        </span>
        </p>
        </div>
        <div className="md:image-hero-wrapper md:mr-72 mb-6 sm:ml-50 flex justify-start ">
        <a href='https://lenscorp.ai/about'>
          <button className="learn-more-light bg-black text-white rounded-lg font-bold">
            Learn More
          </button>
        </a>
        </div>
        
      </div>
    </div>
  )
}

export default LightModeImage