// eslint-disable-next-line no-unused-vars
import React from "react";
import Slider from "../components/Slider";

const Portfolio = () => {
  return (
    <div className=" my-5 p-5 lg:h-auto lg:w-full">
      <div className="hidden lg:block w-full   border-none">
      <div className="w-full h-full">
        <h1 className="text-[25vw] text-center tracking-tight font-SequelSans ">
          portfolio
        </h1>
        <div className="relative bottom-32 overflow-hidden xl:bottom-32">
          <Slider />
        </div>
        {/* <div className="absolute bottom-[13vh] left-0 hover:z-50 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300">
          <div className="w-[30vw] h-[60vh] rounded-[8vh] overflow-hidden bg-black">
            <img
              className="w-full h-full object-cover -scale-x-100"
              src="/rahul.png"
              alt=""
            />
          </div>
        </div>
        <div className="absolute bottom-[11vh] left-[16vw] hover:z-50 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300">
          <div className="w-[30vw] h-[65vh] rounded-[8vh] overflow-hidden bg-slate-600">
            <img
              className="w-full h-full object-cover object-top"
              src="/portfolio1.png"
              alt=""
            />
          </div>
        </div>

        <div className="absolute bottom-[8vh] left-[34vw] z-20 hover:z-50 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300">
          <div className="w-[30vw] h-[70vh] rounded-[8vh] overflow-hidden bg-slate-200">
            <img
              className="w-full h-full object-cover"
              src="/reel vl.png"
              alt=""
            />
          </div>
        </div>

        <div className="absolute bottom-[11vh] left-[55vw] z-10 hover:z-50 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300">
          <div className="w-[30vw] h-[65vh] rounded-[8vh] overflow-hidden bg-red-600">
          <img className='w-full h-full object-cover' src="/portfolio2.png" alt="" />
          </div>
        </div>

        <div className="absolute bottom-[13vh] right-0 z-0 hover:z-50 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300">
          <div className="w-[30vw] h-[60vh] rounded-[8vh] overflow-hidden bg-slate-200">
          <img className='w-full h-full object-cover' src="/portfolio3.png" alt="" />
          </div>
        </div> */}
      </div>
    </div>
    
    <div className="lg:w-1/2 lg:my-5 ">
        <p className="text-sm font-SequelSansMedium lg:text-xl select-none">
          Welcome to my portfolio, where creativity meets precision. From
          podcast edits to explainer videos that simplify ideas, my work
          captivates and informs. Explore gaming highlights, event trailers, and
          social media content tailored for platforms like Instagram, Snapchat,
          and YouTube—all crafted to deliver impactful results.
        </p>
      </div>
      {/* <div className="hidden lg:block bg-purple-400 w-full lg:h-[120vh]"> */}
          {/* <div className="w-full h-full flex  justify-center relative">
            <h1 className="font-SequelSans text-[40vh] leading-tight">portfolio</h1>
            <div className="w-full  bg-red-700 absolute top-60">
              <div className="w-[30vw] h-[65vh] absolute hover:z-50 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300">
                <img className="w-full h-full object-cover -scale-x-100  rounded-[4vw]" src="/rahul.png" alt="" />
              </div>
              <div className="w-[35vw] h-[70vh] absolute top-0 left-36 hover:z-50 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300">
                <img className="w-full h-full object-cover rounded-[4vw]" src="/portfolio1.png" alt="" />
              </div>
              <div className="w-[35vw] h-[75vh] absolute -top-3 left-80 z-20 hover:z-50 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300">
                <img className="w-full h-full object-cover rounded-[4vw]" src="/reel vl.png" alt="" />
              </div>
              <div className="w-[35vw] h-[70vh] absolute  top-0 right-36 z-10 hover:z-50 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300">
                <img className="w-full h-full object-cover rounded-[4vw]" src="/portfolio2.png" alt="" />
              </div>
              <div className="w-[30vw] h-[65vh] absolute top-0 right-0 hover:z-50 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300">
                <img className="w-full h-full object-cover rounded-[4vw]" src="/portfolio3.png" alt="" />
              </div>
            </div>
          </div> */}

      {/* </div> */}
    </div>
  );
};

export default Portfolio;
