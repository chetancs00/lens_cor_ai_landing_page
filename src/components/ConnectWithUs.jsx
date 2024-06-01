'use client';
import Image from 'next/image';
import { useState } from 'react';

export default function ConnectWithUs() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Your logic for handling form submission here
    console.log('Email submitted:', email);
  };

  return (
    <div className="flex justify-center w-full h-full pb-7 dark:bg-black bg-white overflow-hidden">
      <div className="flex flex-col lg:flex-row w-full dark:bg-[#242424]">
        <div className="flex flex-col p-4 lg:w-5/6 dark:bg-[#242424] justify-center md:ml-20">
          <h2 className="mt-10 text-4xl lg:text-6xl text-center lg:text-left dark:text-white text-black">
            Get in touch with us
          </h2>
          <p className="m-10 lg:mx-0 text-gray-700 dark:text-gray-400">
            Send your enquiry now!
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col items-center lg:items-start">
            <div className='h-12 w-96 dark:bg-black bg-[#ededed] rounded-3xl'>
                <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email address"
                className=" bg-transparent dark:transparent border border-none dark:border-none rounded-3xl p-3 mb-6 lg:mb-0 focus:outline-none text-black dark:text-white"
                />
                <button
                type="submit"
                className="bg-[#272e5c] hover:bg-blue-900 transition-all duration-300 text-white rounded-3xl px-8 py-3"
                >
                Request Demo
                </button>
            </div>
          </form>
        </div>
       <div className=" dark:bg-[#000] mx-auto w-5/6" style={{width: "100%"}}>
       <Image
            src="https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmap_2_white.1bdb3808.png&w=750&q=75"
            alt="World Map"
            width={900}
            height={600}
            className="rounded-lg h-auto m-4 lg:m-0 w-full overflow-hidden "
          />
        </div>
      </div>
    </div>
  );
}
