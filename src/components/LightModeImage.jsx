import React from 'react'

const LightModeImage = () => {
  return (
    <div>
        <img
        height="100%"
        width="100%"
        style={{height: "100vh"}}
        src="https://lenscorp.ai/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdetwrhe0k%2Fimage%2Fupload%2Fv1691730929%2Flenscorp-website%2FDesktop_-_23_u3ypg0.jpg&w=128&q=75"/>
        <div className="absolute top-0   h-full flex flex-col items-center justify-center  z-10 leading-4">
            <div className="image-hero-wrapper mb-6">
            <h1 className="text-5xl flex justify-center align-middle md:font-weight-600 md:text-6xl text-black font-raleway ">
          We are at the forefront of AI
        </h1>
        </div>
        <div className="image-hero-wrapper mb-6">
        <p className="hidden md:block text-xl font-semi-bold text-black  font-poppins margin-8-rem">
          From Conserving Wildlife to Automatically Generating Caricatures
        <span className="hidden md:block font-bold text-black  text-xl font-poppins">
          <> - We Do It All</>
        </span>
        </p>
        </div>
        <div className="md:image-hero-wrapper md:mr-60 mb-6 sm:ml-50">
        <>
          <button className="learn-more-light bg-black text-white rounded-lg font-bold">
            Learn More
          </button>
        </>
        </div>
        
      </div>
    </div>
  )
}

export default LightModeImage