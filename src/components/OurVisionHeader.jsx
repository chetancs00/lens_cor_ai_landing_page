import React from "react";

const OurVisionHeader = () => {
  return (
    <div className="py-12 px-5  dark:bg-black">
      <div className="container mx-auto text-center">
        <p className="text-lg font-bold text-[#000] dark:text-white uppercase mb-4 leading-7 tracking-wider our-vision-header">
          OUR VISION
        </p>
        <div className="mx-auto why-choose-underline"></div>
        <h2 className="text-4xl md:text-6xl font-semibold text-black dark:text-white mb-8 tracking-wide -mt-12">
          AI for Social God
        </h2>
        <p className="text-gray-600 dark:text-[##8a8a8a] text-xl mb-12 mx-auto max-w-2xl leading-7 font-semibold">
          Explainable AI (XAI) is an emerging subject of machine learning
          research that refers to strategies that try to provide transparency to
          typically opaque AI models and their predictions.
        </p>
      </div>
    </div>
  );
};

export default OurVisionHeader;
