import React from "react";

const TruAi = () => {
  return (
    <div className="true-ai-container dark:bg-black transition-all duration-300">
      <div className="true-ai-wrapper mt-20">
        <div className="true-ai-main bg-[#272e5c] dark:bg-[#242424] flex">
          <span className="hidden md:block true-ai-first">
            <img
              src="https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FvectorAi.8ec84e23.png&w=384&q=75"
              alt="img"
              style={{ marginTop: "6rem", width: "33%0", zIndex: 20 }}
            />
          </span>
          <div className="true-ai-second flex mt-10">
            <div className="relative top-20 w-full font-bold text-4xl">
              Meet &nbsp;
              <span className="font-bold text-4xl text-transparent true-ai-text">
                True-AI
              </span>
              <img src="https://lenscorp.ai/_next/static/media/underline.27e9f7f7.svg" className="relative left-20" />
              Design. Create. Deploy.
              <div className="font-bold text-xl text-transparent true-ai-text">
                the Future of AI | Power to EDIT
              </div>
              <p className="text-sm">
                Based On Your Website & Traffic Trends, Tru-AI Optimises Your
                Website
              </p>
              <button className="text-sm border-gray-300 learn-more-light bg-transparent text-white py-2 px-4 rounded z-100">
                Learn More
              </button>
            </div>
            <div style={{zIndex: 200}} className="hidden md:block ml-24 mt-12" >
                <video
                className="h-screen video-border-radius  md:w-screen md:h-72 object-cover"
                autoPlay
                muted
                loop
                playsInline
                // style
                // muted
                src="https://res.cloudinary.com/detwrhe0k/video/upload/v1691730954/lenscorp-website/product-intro_1_dmajx1_qaemeu.mp4"
                />
                    {/* <source src="" type="mp4/video" />
                </video> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TruAi;
