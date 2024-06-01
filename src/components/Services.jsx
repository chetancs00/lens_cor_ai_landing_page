"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, {useRef} from "react";
import ServicesCard from "./ServicesCard";
gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const scrollRef = useRef()


  useGSAP(
    () => {
      const boxes = gsap.utils.toArray(scrollRef.current.children);
      boxes.forEach((box) => {
        gsap.from(box, {
          // x: 150 * (boxes.indexOf(box) + 1),
          // borderRadius: "100%",
          opacity: 0,
          // scrollTrigger: {
          //   trigger: box,
          //   start: "bottom bottom",
          //   end: "top 20%",
          //   scrub: true,
          // },
          ease: "power1.inOut",
        });
        gsap.to(box, {
          // x: 150 * (boxes.indexOf(box) + 1),
          // borderRadius: "100%",
          scale: 1.03,
          opacity: 1,
          stagger: 0.2,
          scrollTrigger: {
            trigger: box,
            start: "bottom bottom",
            end: "top 50%+=100px",
            scrub: true,
          },
          ease: "power1.inOut",
        });
      });
    },
    { scope: scrollRef }
  );

    const cardData = [
        {
          cardNo: '01',
          title: 'Biometrics',
          titleColor: '#01c99d',
          content: 'Academia-backed & In-house researched State-of-the-Art Face, Fingerprint, and Iris Recognition SDKs. Enable real-time automated Biometric applications on edge devices even without an active internet connection.',
        },
        {
          cardNo: '02',
          title: 'Image Analysis',
          titleColor: '#4682B4', // Steel blue color
          content: 'Outsource the overly complex image analysis work to our intelligent machines that adaptively learn, so you can focus on making the best decisions for your business.',
        },
        {
          cardNo: '03',
          title: 'Cross-Media Translation',
          titleColor: '#ff605f',
          content: 'Will something like Siri or Alexa enhance your business? We can deliver text-to-speech, text-to-image, speech-to-text, speech-to-image, speech-to-image, image-to-text and image-to-speech solutions for maximum convenience.',
        },
        {
          cardNo: '04',
          title: '3D Modelling and Design',
          titleColor: '#FF4500', // Orange red color
          content: 'We offer services for automated generation of 3D assets with realistic shapes and textures. We animate the 3D models with voice and videos with an aim to retarget voice and/or expressions with pose from a single Image/video.',
        },
      ];

      
  return (
    <div className="bg-custom-gradient dark:bg-none bg-black p-6 shadow-lg family-poppins">
      <div className="services-heading">
        <h2 className="text-2xl font-bold mb-2 text-black dark:text-white">
          SERVICES
        </h2>
        <div className="mx-auto services-underline"></div>
      </div>
      <div className="mt-10 mb-10">
        <h1 className="text-black dark:text-white md:text-6xl text-3xl font-poppins">
          We provide Artificial Intelligence Services
        </h1>
      </div>
      <div 
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 p-6 h-2/4 md:mr-32 md:ml-32"
      ref={scrollRef}
      >
      {cardData.map((card) => (
        <ServicesCard
          key={card.cardNo}
          cardNo={card.cardNo}
          title={card.title}
          titleColor={card.titleColor}
          content={card.content}
        />
      ))}
    </div>
    </div>
  );
};

export default Services;
