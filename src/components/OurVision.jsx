import { ScaleIcon, ShieldCheckIcon, UserGroupIcon } from "@heroicons/react/24/outline";
import React from "react";
import OurVisionHeader from "./OurVisionHeader";

const OurVision = () => {
  return (
    <div className="flex flex-col items-center dark:bg-black bg-gray-100 py-12">
      <OurVisionHeader/>
      <div className="w-4/5 relative">
        <div className="hidden md:block absolute w-0.5 h-full left-1/2 transform -translate-x-1/2 bg-gray-900 border-dashed border z-10"></div>
        <ul className="list-none relative">
          <li className="mb-16 relative flex md:items-start">
            <div className="w-full md:w-1/2 text-right pr-8 hover:scale-110 transition-all duration-300">
              <h3 className="text-2xl text-gray-800 mb-2 font-bold dark:text-white w-5/6 ">Diversity & Fairness</h3>
              <p className="text-base text-gray-600 mb-4 dark:text-white">
                When training our AI models, we consider ethical and social implications
                of algorithm-based decision making. Our solutions use high-quality and
                fairly-represented data sets to eliminate human cognitive biases.
              </p>
            </div>
            <div className="relative w-16 flex justify-center items-center z-20 ">
              <UserGroupIcon className="absolute w-12 h-12 border-4 dark:border-white border-gray-500 rounded-full text-black dark:text-white p-2 bg-transparent" />
            </div>
            <div className="md:w-1/2"></div>
          </li>
          <li className="mb-16 relative flex md:items-start">
            <div className="md:w-1/2"></div>
            <div className="relative w-16 flex justify-center items-center">
              <ShieldCheckIcon className="z-20 dark:border-white absolute w-12 h-12 border-4 border-gray-500 rounded-full text-black dark:text-white p-2 bg-transparent" />
            </div>
            <div className="md:w-1/2 pl-8 hover:scale-110 transition-all duration-300">
              <h3 className="text-2xl font-bold text-gray-800 mb-2 dark:text-white">Regulatory Compliance</h3>
              <p className="text-base text-gray-600 mb-4 dark:text-white">
                Working with clients globally, LENS acknowledges applicable data privacy
                regulations, such as the GDPR, HIPAA and others, in all our solutions
                handling sensitive data. We also ensure our algorithms allow for the
                required level of decision-making transparency and explainability.
              </p>
            </div>
          </li>
          <li className="mb-16 relative flex md:items-start">
            <div className="md:w-1/2 text-right pr-8 hover:scale-110 transition-all duration-300">
              <h3 className="text-2xl text-gray-800 mb-2 font-bold dark:text-white">Code of Ethics</h3>
              <p className="text-base text-gray-600 mb-4 dark:text-white">
                LENS believes in a just, non-violent world of equality and fairness. We
                prize democratic values, civil liberties and open and informed debate.
                When used to further these values, algorithm-based decision-making
                models can continue to make the world a safer, better place for everyone.
              </p>
            </div>
            <div className="relative w-16 flex justify-center items-center">
              <ScaleIcon className=" dark:border-white absolute w-12 h-12 border-4 border-gray-500 rounded-full text-black dark:text-white p-2 bg-transparent"/>
            </div>
            <div className="md:w-1/2"></div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default OurVision;
