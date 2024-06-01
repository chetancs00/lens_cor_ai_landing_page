'use client';

import React from 'react';
import { useTheme } from '@/context/ThemeContext';

const ServicesCard = ({ cardNo, title, titleColor, content }) => {
  const { theme } = useTheme();

  return (
    <div
      className={` relative p-6 rounded-lg shadow-lg transition-all duration-300 
        ${theme === 'dark' ? 'bg-[#1b1c1e]' : 'bg-white'}
        hover:bg-transparent hover:border ${theme === 'dark' ? 'hover:border-[#1b1c1e]' : 'hover:border-white'}
        `}
      style={{ borderColor: titleColor, maxHeight: "100%", maxWidth: "470px" }}
    >
      <div className="absolute top-4 left-4 md:text-7xl text-6xl z-1 font-bold font-poppins" style={{ color: '#707070' }}>
        <span className="text-[#707070] z-1 service-no font-poppins">0</span>
        <span className="transition-colors duration-300 service-no hover:text-opacity-0 z-1 font-poppins">{cardNo[1]}</span>
      </div>
      <h2
        className={`text-xl mt-5 flex items-center md:text-4xl text-left font-bold ml-1.5 mb-4 transition-all duration-300 z-100 service-title`}
        style={{color: titleColor, display: "flex", flexWrap: "wrap",
        overflowWrap: "break-word",
        // Adjust transform to center horizontally
        }}
      >
        {title}
      </h2>
      <div className="md:mt-20 mt-10">
      <p className="text-gray-700 dark:text-gray-300 font-bold">
        {content}
      </p>

      </div>
      <style jsx>{`
        div:hover .absolute span:last-child {
          color: ${titleColor};
          opacity: 1;
        }
        div:hover h2 {
          color: #707070 !important;
          margin-left: 78px;
        }
      `}</style>
    </div>
  );
};

export default ServicesCard;
