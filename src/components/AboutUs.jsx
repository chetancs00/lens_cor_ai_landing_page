"use client";

// components/AboutUs.js
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
  const [isHovered, setIsHovered] = useState(false);
  const scrollRef = useRef()

  useGSAP(
    () => {
      const boxes = gsap.utils.toArray(scrollRef.current.children);
      boxes.forEach((box) => {
        gsap.from(box, {
          // x: 150 * (boxes.indexOf(box) + 1),
          // borderRadius: "100%",
          scale: 1.03,
          opacity: 0,
          scrollTrigger: {
            trigger: box,
            start: "bottom bottom",
            end: "top 20%",
            scrub: true,
          },
          ease: "power1.inOut",
        });
        gsap.to(box, {
          // x: 150 * (boxes.indexOf(box) + 1),
          // borderRadius: "100%",
          scale: 1.03,
          opacity: 100,
          scrollTrigger: {
            trigger: box,
            start: "bottom bottom",
            end: "top 20%",
            scrub: true,
          },
          ease: "power1.inOut",
        });
      });
    },
    { scope: scrollRef }
  );

  return (
    <div className="dark:bg-black bg-white w-full pt-20 pb-10">
      <div className="about-us-heading dark:text-white text-black mb-20  flex justify-center flex-col">
        <h1 className="text-6xl font-raleway font-semibold">About Us</h1>
        <div className="mx-auto about-us-underline"></div>
      </div>
      <div
      ref={scrollRef}
      className="about-us-hero flex flex-col-reverse sm:flex-col-reverse md:flex-row items-center justify-between w-4/5 mx-auto p-6 dark:bg-[#1b1c1e] bg-[#e2f2ff] rounded-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex-1 text-center md:text-left p-4">
          <h1 className="dark:text-white welcome-text md:text-4xl font-bold text-[#212121] mb-4">
            Welcome To LENS
          </h1>
          <p className="dark:text-white sm:text-sm md:text-lg text-[#424242] mb-4">
            We put our hearts, souls, and sweat into designing and developing
            custom AI-powered solutions for your business so you don't have to.
          </p>
          <Link href="/about">
            <div className="dark:border-white dark:text-white inline-block bg-transparent text-[#424242] border border-[#424242] rounded-2xl px-6 py-2 font-semibold transition-colors duration-300 hover:bg-[#424242] hover:text-white dark:hover:bg-white dark:hover:text-black">
              Learn More
            </div>
          </Link>
        </div>
        <div className="about-us-img-wrapper p-4">
          <img
            src="https://lenscorp.ai/_next/image?url=%2FImages%2FaboutLatest.webp&w=640&q=75"
            alt="LENS Team"
            width={400}
            height={400}
            style={{scale : isHovered ? 1.09 : ""}}
            className="about-us-img rounded-lg transition-transform duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
