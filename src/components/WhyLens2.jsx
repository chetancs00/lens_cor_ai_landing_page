"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image"; // Import Next.js Image component

// Define your pin icon images (replace with actual paths)
const greenPin =
  "https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgreen.e71c8735.png&w=256&q=75";
// const bluePin = '/path/to/blue-pin.png';
// const redPin = '/path/to/red-pin.png';
// const yellowPin = '/path/to/yellow-pin.png';

const Testimonial = ({ children }) => {
  return <div>{children}</div>;
};

const TestimonialContent = ({ children }) => {
  return <div className="p-8 rounded-xl text-center relative">{children}</div>;
};

const TestimonialHeading = ({ children }) => {
  return <h3 className="text-xl">{children}</h3>;
};

const TestimonialText = ({ children }) => {
  return (
    <p className="text-gray-600 text-base font-poppins h-40 mt-8 w-64 md:w-72 lg:w-96">
      {children}
    </p>
  );
};

export default function WhyLens2() {
  const cards = [
    {
      title: "Exclusive Rights",
      images:
        "https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgreen.e71c8735.png&w=256&q=75",
      backgroundGradient:
        "linear-gradient(rgba(1, 201, 156, 0.15) 0%, rgba(1, 201, 156, 0) 100%), transparent",
      outlineColor: "rgb(1,201,155)",
      content:
        "Our mission is to make an impact in empowering human society with AI. Hence, all Intellectual Property Rights belongs to you.",
    },
    {
      title: "Research Driven",
      images:
        "https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fblue.f22859fe.png&w=256&q=75",
      backgroundGradient:
        "linear-gradient(rgba(3, 177, 249, 0.2) 0%, rgba(63, 189, 241, 0) 100%), transparent",
      outlineColor: "rgb(63,189,241)",
      content:
        "We regularly benchmark our solutions via comparing industry-vide evaluations so our partners only get the best that AI can offer.",
    },
    {
      title: "Plug-and-Play",
      images:
        "https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fred.a7efdb29.png&w=128&q=75",
      backgroundGradient:
        "linear-gradient(rgba(255, 107, 102, 0.2) 0%, rgba(0, 0, 0, 0) 100%), transparent",
      outlineColor: "rgb(255,96,95)",
      content:
        "We provide AI-driven solutions into businesses where they can bring tangible value. Each solution is customized as per your needs and deployed on any computing device of your choice.",
    },
    {
      title: "Lifetime Support",
      images:
        "https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fyellow.d937d179.png&w=256&q=75",
      backgroundGradient:
        " linear-gradient(rgba(255, 159, 49, 0.15) 0%, rgba(255, 159, 49, 0) 100%), transparent",
      outlineColor: "rgb(255,159,49)",
      content:
        "Should you face any issues, we are always at your service. We provide lifetime technical support & upgrade options.",
    },
    // Add similar objects for cards 3 and 4 with their titles, images, and styles
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-8 dark:bg-black">
      {cards.map((data) => (
        <Card
          background={data.backgroundGradient}
          outline={data.outlineColor}
          title={data.title}
          image={data.images}
          content={data.content}
        />
      ))}
    </div>
  );
}

const Card = ({ background, outline, image, title, content }) => {
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
      const interval = setInterval(() => {
        const shouldShow = Math.random() > 0.5;
        setShowImage(shouldShow);
      }, 3000);
      return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`relative p-4 hover:${background} hover:[${outline}] transition-all duration-300 rounded-xl ease-in-out h-full dark:bg-[#1b1c1e]`}
      style={{ height: "435px", background: showImage ? background : "",
        outline: showImage ? outline : '',
        border: showImage ? `2px solid ${outline}` : ''
       }}
      onMouseEnter={() => setShowImage(true)}
      onMouseLeave={() => setShowImage(false)}
    >
      <div>
        <p className="text-center dark:text-white text-black font-extrabold text-2xl">
          {title}
        </p>
      </div>
      {showImage && (
        <div className="flex justify-center items-center">
          <img
            src={image}
            alt="Card"
            width="171"
            height="148"
            style={{ color: "transparent" }}
            className="absolute object-cover top-20"
          />
        </div>
      )}
      <p className="dark:text-white text-black relative top-60 ">{content}</p>
    </div>
  );
};
