/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef } from "react";
// import Card from "../components/Card";
import { IoIosArrowRoundDown } from "react-icons/io";
import "./Hero.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Slider from "../components/Slider";

const Hero = () => {
  const images = [
    {
      id: 0,
      src: "/rahul.png",
      alt: "Rahul",
    },
    {
      id: 1,
      src: "/portfolio1.png",
      alt: "Soumy",
    },
    {
      id: 2,
      src: "/portfolio2.png",
      alt: "Rahul",
    },
    {
      id: 3,
      src: "/portfolio3.png",
      alt: "Soumy",
    },
    // {
    //   id: 4,
    //   src: "/reel vl.png",
    //   alt: "Soumy",
    // },
  ];

  gsap.registerPlugin(ScrollTrigger);

  const card1 = useRef(0);
  // const card2 = useRef(0);
  // const card3 = useRef(0);

  useGSAP(function () {
    gsap.to(card1.current, {
      scrollTrigger: {
        trigger: card1.current,
        start: "top 15%",
        end: "bottom 15%",
        toggleActions: "play reverse play reverse",
        // markers: true,
        scrub: true,
      },
      ease: "none",
      duration: 1,
    });
  });

  // useGSAP(function () {
  //   gsap.to(card2.current, {
  //     scrollTrigger: {
  //       trigger: card2.current,
  //       start: "top 15%",
  //       end: "bottom 15%",
  //       toggleActions: "play reverse play reverse ",
  //       markers: true,
  //       pin: true,
  //       scrub: true,
  //     },
  //     yPercent:-100,
  //     ease: "none",
  //     duration: 1,
  //   });
  // });

  // useGSAP(function () {
  //   gsap.to(card3.current, {
  //     scrollTrigger: {
  //       trigger: card3.current,
  //       start: "top 10%",
  //       end: "bottom 15%",
  //       toggleActions: "play reverse play reverse ",
  //       markers: true,
  //       scrub: true,
  //     },
  //     ease: "none",
  //     duration: 1,
  //   });
  // });

  // useGSAP(function () {
  //   gsap.to(card3.current, {
  //     scrollTrigger: {
  //       trigger: card3.current,
  //       start: "top 15%",
  //       end: "bottom 15%",
  //       toggleActions: "play reverse play reverse ",
  //       markers: true,
  //       scrub: true,
  //     },
  //     ease: "none",
  //     duration: 1,
  //   });
  // });
  useEffect(() => {
    gsap.utils.toArray(".card").forEach((card) => {
      gsap.to(card, {
        scrollTrigger: {
          trigger: card,
          start: "top top",
          end: "bottom 15%",
          toggleActions: "play ",
          pin: true,
          // markers: true,
          scrub: true,
        },
        opacity: 0,
      });
    });
  });
  return (
    <div className=" p-5 w-full h-screen">
       <div className="lg:flex lg:justify-center xl:flex xl:justify-center ">
        <div className="lg:w-1/2 lg:h-screen">
          <div className="min-h-32 bg-soumyName bg-no-repeat bg-contain my-5 md:mt-10 md:h-[25vh] lg:h-[30vh] lg:mt-14 xl:h-[35vh] 2xl:h-[30vh]"></div>
          <div className="hidden md:block lg:block mb-5">
            <p className="text-right text-xs font-SequelSansMedium md:text-xl xl:text-lg 2xl:text-3xl">
              Welcome! I&apos;m a skilled video editor, <br /> designer, and
              content creator, ready to <br /> bring your vision alive.
            </p>
          </div>
          <div className="hidden lg:flex justify-between mt-12 space-x-5 p-2 lg:mt-24 xl:mt-28 xl:p-1">
            <div className="">
              <div className="flex justify-end">
                <span className="text-2xl font-bold xl:text-3xl">+</span>
                <h2 className="inline text-6xl font-SequelSansMedium italic xl:text-7xl">
                  250k
                </h2>
              </div>
              <p className="text-sm  font-SequelSansMedium leading-4 text-right xl:text-base">
                Videos that reachin a wide audience and ove lastno impression
              </p>
            </div>
            <div className="">
              <div className="flex justify-end">
                <span className="text-2xl font-bold xl:text-3xl">+</span>
                <h2 className="inline text-6xl font-SequelSansMedium italic xl:text-7xl">
                  800k
                </h2>
              </div>
              <p className="text-sm leading-4 text-right font-SequelSansMedium xl:text-base">
                Hours watched, engaging Storytelling thai Captvates viewers
              </p>
            </div>
          </div>
        </div>
        <div className="hidden lg:relative lg:block w-1/2">
          <div className="min-h-32 bg-photoWithBg bg-no-repeat bg-cover lg:h-full lg:bg-contain xl:h-full  xl:bg-contain 2xl:h-screen 2xl:bg-contain"></div>
          <div className="lg:h-52 lg:absolute lg:bottom-[13vh] lg:left-3 lg:flex lg:flex-col lg:justify-around  xl:bottom-0 xl:h-60  xl:left-8 2xl:bottom-64 2xl:left-10">
            <div className="w-16 h-16 bg-black rounded-full overflow-hidden ">
              <img
                className="w-full h-full object-cover object-top"
                src="/graphic_design.png "
                alt=""
              />
            </div>
            <div className="w-16 h-16 bg-black  rounded-full overflow-hidden">
              <img
                className="w-full h-full object-cover object-top"
                src="/reel vl.png"
                alt=""
              />
            </div>
            <div className="w-16 h-16 rounded-full overflow-hidden">
              <img
                className="w-full h-full object-cover object-top"
                src="/rahul.png "
                alt=""
              />
            </div>
          </div>
          <div className="bg-secondryColor w-14 h-14 absolute top-0 right-1 rounded-full xl:top-3 xl:right-10 2xl:top-8 2xl:right-11">
            <img src="/white smile.png " alt="" />
          </div>
        </div>
      </div> 
      <div className="mb-5 md:hidden lg:hidden">
        <p className="text-right text-xs font-SequelSansMedium ">
          Welcome! I&apos;m a skilled video editor, designer, and content
          creator, ready to bring your vision alive.
        </p>
      </div>

      <div className="rounded-3xl py[15vh] overflow-y-scroll my-5 flex flex-col gap-16 lg:hidden">
        <Slider />
        {/* {images.map((item, i) => {
          return (
            <div key={i} className="card sticky top-0  w-full h-full">
              <img className="object-contain" src={item.src} alt="" />
            </div>
          );
        })} */}
        {/* <div ref={card1} className="card1 sticky top-0  w-full h-full">
          <img className="object-contain" src="/reel vl.png" alt="" />
        </div> */}
        {/* <div ref={card1} className="card1 sticky top-0  w-full h-full">
          <img className="object-contain" src='/rahul.png' alt="" />
        </div> */}
        {/* <div ref={card2} className="card2 sticky top-0 w-full h-full">
          <img className="object-contain" src='/portfolio1.png' alt="" />
        </div>
        <div ref={card3} className="card3 sticky top-2  w-full h-full">
          <img className="object-contain" src='/portfolio2.png' alt="" />
        </div> */}
      </div>

      {/* <div ref={animate} className="h-[65vh] bg-slate-700 rounded-3xl my-5 overflow-hidden lg:hidden">
         <Card  />
      </div> */}

      {/* <div ref={animate} className="h-[65vh] bg-slate-700 rounded-3xl my-5 overflow-hidden lg:hidden">
        {images.map((item, i)=>{
          return <Card key={i} data={item} />
        })}
      </div> */}
      {/* <div
        ref={animate}
        className="h-96 relative bg-slate-700 rounded-3xl my-5  overflow-hidden lg:hidden "
      >
        <div className="w-full h-full absolute top-0">
          <img className="object-contain" src="/rahul.png" alt="" />
        </div>
        <div ref={box1} className="w-full h-full absolute z-30 top-[65vh]">
          <img className="object-contain" src="/potfolio1.png" alt="" />
        </div>
        <div className="w-full h-full absolute top-[130vh]">
          <img className="object-contain" src="/rahul.png" alt="" />
        </div>
      </div> */}

      <div className="lg:hidden flex justify-between mt-10 mb-5 space-x-5">
        <div className="">
          <div className="flex justify-end">
            <span className="text-xl font-bold">+</span>
            <h2 className="inline text-3xl font-SequelSansMedium italic lg:text-5xl">
              250k
            </h2>
          </div>
          <p className="text-xs  font-SequelSansMedium leading-4 text-right md:text-base lg:text-sm">
            Videos that reachin a wide audience and ove lastno impression
          </p>
        </div>
        <div className="">
          <div className="flex justify-end">
            <span className="text-xl font-bold ">+</span>
            <h2 className="inline text-3xl font-SequelSansMedium italic">
              800k
            </h2>
          </div>
          <p className="text-xs md:text-base lg:text-sm leading-4 text-right font-SequelSansMedium">
            Hours watched, engaging Storytelling thai Captvates viewers
          </p>
        </div>
        <div className="md:w-32 w-36">
          <IoIosArrowRoundDown className="h-full w-full" />
        </div>
      </div>
    </div>
  );
};

export default Hero;


