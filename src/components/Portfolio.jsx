// eslint-disable-next-line no-unused-vars
import React from "react";

const Portfolio = () => {
  return (
    <div className="w-full h-[120vh] px-5 overflow-hidden border-none">
      <div className="w-full h-full relative">
        <h1 className="text-[45vh] text-center tracking-tight font-SequelSansMedium">
          portfolio
        </h1>
        <div className="absolute bottom-10 left-[2vw] hover:z-50 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300">
          <div className="w-[30vw] h-[60vh] rounded-[8vh] overflow-hidden bg-black">
            <img
              className="w-full h-full object-cover -scale-x-100"
              src="/rahul.png"
              alt=""
            />
          </div>
        </div>
        <div className="absolute bottom-6 left-[16vw] hover:z-50 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300">
          <div className="w-[30vw] h-[65vh] rounded-[8vh] overflow-hidden bg-slate-600">
            <img
              className="w-full h-full object-cover object-top"
              src="/portfolio1.png"
              alt=""
            />
          </div>
        </div>

        <div className="absolute bottom-1 left-[34vw] z-20 hover:z-50 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300">
          <div className="w-[30vw] h-[75vh] rounded-[8vh] overflow-hidden bg-slate-200">
            <img
              className="w-full h-full object-cover"
              src="/reel vl.png"
              alt=""
            />
          </div>
        </div>

        <div className="absolute bottom-6 left-[55vw] z-10 hover:z-50 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300">
          <div className="w-[30vw] h-[65vh] rounded-[8vh] overflow-hidden bg-red-600">
          <img className='w-full h-full object-cover' src="/portfolio2.png" alt="" />
          </div>
        </div>

        <div className="absolute bottom-10 right-[2vw] z-0 hover:z-50 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300">
          <div className="w-[30vw] h-[55vh] rounded-[8vh] overflow-hidden bg-slate-200">
          <img className='w-full h-full object-cover' src="/portfolio3.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
