'use client';
import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";

const OurBlogs = () => {
  return (
    <div className="py-12 px-5 bg-custom-gradient dark:bg-none bg-black family-poppins">
      <MaxWidthWrapper className="md:ml-32 md:mr-32 bg-transparent">
        <div className="container mx-auto text-center">
          <p className="text-lg font-bold text-[#000] dark:text-white uppercase mb-4 leading-7 tracking-wider our-vision-header">
            OUR BLOGS
          </p>
          <div className="mx-auto why-choose-underline"></div>
          <h2 className="text-4xl md:text-6xl font-semibold text-black dark:text-white mb-8 tracking-wide -mt-12">
            Inhouse Mindscape
          </h2>
        </div>
        <div className="container mx-auto py-12 grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="group first-blog rounded-3xl dark:border-none border dark:bg-[#1b1c1e] text-black dark:text-white hover:bg-[#fffbea] px-5 py-5 overflow-hidden h-full w-full transition-all duration-300">
            <div className="hover:-translate-y-12 transition-all duration-300">
              <div className="dark:text-white text-red-600 mb-4 text-start">
                New!
              </div>
              <div className="mb-4">
                <p className="uppercase text-black dark:text-white text-2xl sm:text-lg tracking-wide text-start">
                  How AI is Optimizing Your Taxi Rides
                </p>
              </div>
              <div className="mb-4">
                <div className="bg-[#fff6cd] w-full py-6 px-3 rounded-xl">
                  <p className="text-[#828282] text-base family-poppins text-left">
                    Discover how Artificial Intelligence is revolutionising the taxi app landscape, leading to improved efficiency, shorter wait times, and a more satisfying user experience....
                  </p>
                </div>
              </div>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-start text-red-500 cursor-pointer hover:-translate-y-0.5 duration-300 transition-all hover:text-black dark:hover:text-white">
                  Read More &gt;&gt;
                </p>
              </div>
            </div>
          </div>
          <div className="group first-blog rounded-3xl dark:border-none border dark:bg-[#1b1c1e] text-black dark:text-white hover:bg-[#f2f9ff] px-5 py-5 overflow-hidden h-full w-full transition-all duration-300">
            <div className="hover:-translate-y-12 transition-all duration-300">
              <div className="dark:text-white text-black mb-4 text-start family-poppins">
                May 15, 2024
              </div>
              <div className="mb-4">
                <p className="uppercase text-black dark:text-white text-2xl sm:text-lg tracking-wide text-start">
                  How AI is Revolutionizing Your Shopping Experience
                </p>
              </div>
              <div className="mb-4">
                <div className="bg-[#e2f2ff] w-full py-6 px-3 rounded-xl">
                  <p className="text-[#828282] text-base family-poppins text-left">
                    From personalized recommendations to frictionless checkout, AI is transforming the way you shop.Discover the future of retail and how AI is making shopping faster, easier, and more enjoyable....
                  </p>
                </div>
              </div>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-start text-red-500 cursor-pointer hover:-translate-y-0.5 duration-300 transition-all hover:text-black dark:hover:text-white">
                  Read More &gt;&gt;
                </p>
              </div>
            </div>
          </div>
          <div className="group first-blog rounded-3xl dark:border-none border dark:bg-[#1b1c1e] text-black dark:text-white hover:bg-[#fff8f8] px-5 py-5 overflow-hidden h-full w-full transition-all duration-300 md:col-span-2">
            <div className="hover:-translate-y-12 transition-all duration-300">
              <div className="dark:text-white text-black mb-4 text-start">
                May 8, 2024
              </div>
              <div className="mb-4">
                <p className="uppercase text-black dark:text-white text-2xl sm:text-lg tracking-wide text-start">
                  Generative AI
                </p>
              </div>
              <div className="mb-4">
                <div className="bg-[#ffeceb] w-full py-6 px-3 rounded-xl">
                  <p className="text-[#828282] text-base family-poppins text-left">
                    In today's data-driven marketing world, keeping up with content creation demands can be a challenge. Read our latest blog to explore the power of Generative AI and its potential to reshape the marketing landscape....
                  </p>
                </div>
              </div>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-start text-red-500 cursor-pointer hover:-translate-y-0.5 duration-300 transition-all hover:text-black dark:hover:text-white">
                  Read More &gt;&gt;
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
            <div className="border-1 text-black dark:text-white border-black p-2 outline w-56 rounded-xl hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 cursor-pointer">
                <a href="https://lenscorp.ai/blogs" target="_blank">Explore More</a>
            </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default OurBlogs;
