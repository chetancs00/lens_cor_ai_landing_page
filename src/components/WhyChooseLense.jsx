'use client';
import { CheckIcon } from "@heroicons/react/24/solid";
import React from "react";

const options = [
  { id: 1, desc: "State-of-the-art solutions" },
  { id: 2, desc: "Fast & Efficient" },
  { id: 3, desc: "No extra computation fee" },
  { id: 4, desc: "No licensing fee" },
];

const option = [
  { id: 5, desc: "Lifetime support & upgrades" },
  { id: 6, desc: "Plug-and-Play" },
  { id: 7, desc: "24x7 Progress Monitoring" },
  { id: 8, desc: "Incremental Updates" },
];

const PackageTier = ({ options }) => {
  return (
    <ul className="text-left space-y-2 mr-10">
      {options.map((desc) => (
        <li key={desc.id} className="flex items-center text-[#000] dark:text-white text-lg tracking-wide font-semibold">
          <CheckIcon className="w-5 h-5 text-[#000] dark:text-white mr-2 font-extrabold" />
          {desc.desc}
        </li>
      ))}
    </ul>
  );
};

const Whylens = () => {
  return (
    <div className="min-h-screen py-12 px-5 bg-white dark:bg-black">
      <div className="container mx-auto text-center">
        <h1 className="text-lg font-bold text-[#000] dark:text-white uppercase mb-4">
          WHY CHOOSE LENS
        </h1>
        <div className="mx-auto why-choose-underline"></div>
        <h2 className="text-4xl md:text-6xl font-semibold text-black dark:text-white mb-8 tracking-wide">
          AI-driven solutions backed by <br/> science
        </h2>
        <p className="text-gray-600 dark:text-[##8a8a8a] text-xl mb-12 mx-auto max-w-2xl leading-7 font-semibold">
          Every piece of AI technology shipped from LENS is thoroughly
          benchmarked via rigorous evaluations. With a global network of
          experts and academicians, we guarantee the most accurate and
          robust solutions in the market.
        </p>
        <div className="flex justify-center md:flex-row flex-col">
          <PackageTier options={options} />
          <PackageTier options={option} />
        </div>
      </div>
    </div>
  );
};

export default Whylens;
