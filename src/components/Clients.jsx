import React from 'react';

const Clients = () => {
  const client1 = "https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FCo_1.ad2ee302.png&w=256&q=75";
  const client2 = "https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FCo_3.37f82c98.png&w=256&q=75";
  const client3 = "https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FCo_2.7e06895b.png&w=256&q=75";
  const client4 = "https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgrov.97a72987.png&w=128&q=75";

  return (
    <div className='dark:bg-black bg-white pb-20 dark:text-white text-black'>
        <div className="flex flex-col items-center space-y-4  mb-10 pt-5">
        <p className='text-3xl font-raleway font-semibold text-center'>
            We Work With Amazing Clients
        </p> 
        </div>
        <div className="flex justify-center items-center space-x-8 overflow-hidden ">
        <img src={client1} alt="Client 1" className="client-image w-32 h-auto dark:invert" />
        <img src={client2} alt="Client 2" className="client-image w-32 h-auto dark:invert" />
        <img src={client3} alt="Client 3" className="client-image w-32 h-auto dark:invert" />
        <img src={client4} alt="Client 4" className="client-image w-32 h-auto dark:invert" />
        </div>
    </div>
  );
};

export default Clients;
