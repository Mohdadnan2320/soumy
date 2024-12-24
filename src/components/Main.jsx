// eslint-disable-next-line no-unused-vars
import React from "react";

const Main = () => {
  return (
    <div className=" w-full h-full  p-5 mt-5">
      <div className="w-full h-full flex">
        <div className="w-3/5 bg-red-300 pt-20 xl:pt-20 lg:pt-16">
          <div className="h-[100vh] bg-soumyName bg-no-repeat bg-contain xl:h-[40vh] lg:h-[30vh]"></div>
          <div className="mt-5">
            <p className="text-right text-sm font-SequelSansMedium xl:text-xl">
              Welcome! I&apos;m a skilled video editor, <br /> designer, and
              content creator, ready to <br /> bring your vision alive.
            </p>
          </div>
          <div className="w-full h-auto mt-24 flex justify-around lg:mt-14">
            <div className="">
              <div className="flex justify-end">
                <span className="text-6xl font-bold lg:text-4xl">+</span>
                <h2 className="inline text-8xl font-SequelSansMedium italic lg:text-5xl">250k</h2>
              </div>
              <p className=" mt-2 text-base font-SequelSansMedium leading-4 text-right lg:text-sm">
                Videos that reachin a wide <br /> audience and ove lastno
                impression
              </p>
            </div>
            <div className="">
              <div className="flex  justify-end">
                <span className="text-6xl font-bold  lg:text-4xl">+</span>
                <h2 className="inline text-8xl font-SequelSansMedium italic lg:text-5xl">800k</h2>
              </div>
              <p className="mt-2 text-base leading-4 text-right font-SequelSansMedium lg:text-sm">
                Hours watched, engaging <br /> Storytelling thai 
                Captvates viewers
              </p>
            </div>
          </div>
        </div>
        <div className=" w-2/5 bg-slate-500 xl:h-[80vh] lg:h-[80vh] relative">
          <div className="h-full bg-photoWithBg bg-no-repeat bg-cover relative xl:bg-contain xl:bg-center lg:bg-conatin"></div>
          <div className="bg-secondryColor w-16 h-16 absolute top-2 right-2 rounded-full xl:h-16 xl:w-16 xl:top-2 xl:right-2  lg:w-12 lg:h-12 lg:top-1 lg:right-4">
            <img src="/white smile.png " alt="" />
          </div>
          <div className="w-auto h-auto absolute bottom-8 left-6 lg:bottom-0 lg:left-4">
            <div className="overflow-hidden xl:flex xl:flex-col xl:gap-3">
              <div className="w-14 h-14 ">
                <img
                  className=" w-full h-full object-cover object-top rounded-full"
                  src="/graphic_design.png "
                  alt=""
                />
              </div>
              <div className="w-14 h-14">
                <img
                  className=" w-full h-full object-cover object-top rounded-full"
                  src="/reel vl.png"
                  alt=""
                />
              </div>
              <div className="w-14 h-14">
                <img
                  className=" w-full h-full object-cover object-top rounded-full"
                  src="/rahul.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

{
  /* <div
          className="w-full h-[50vh] bg-bgBox bg-no-repeat overflow-hidden
        xl:bg-cover xl:w-1/2 xl:h-screen"
        >
          <img
            className="-scale-x-100 h-full max-h-fit -ml-11 object-cover xl:ml-0"
            src="/soumy photo.webp"
            alt="portfolio image"
          />
        </div> */
}

{
  /* <div className="my-5 xl:w-1/2 xl:my-0">
          <div className="bg-soumyName bg-no-repeat bg-contain w-full h-[15vh] xl:h-full"></div>

          <div className="my-5 xl:my-0">
            <p className="text-right text-sm font-SequelSansMedium xl:text-xl">
              Welcome! I&apos;m a skilled video editor, <br /> designer, and
              content creator, ready to <br /> bring your vision alive.
            </p>
          </div>
        </div> */
}
