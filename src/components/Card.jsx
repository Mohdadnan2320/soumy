/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef } from "react";

import { ScrollTrigger } from "gsap/ScrollTrigger";

// import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Card = ({ data }) => {
  const { src } = data;
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.utils.toArray(".card").forEach((card) => {
      console.log(card)
      gsap.to(card, {
        scale: 0.8,
        opacity: 0,
        scrollTrigger:{
          trigger: card,
          start: "top 15%",
          end: "bottom 15%",
          toggleActions: "play reverse play reverse reset",
          pin: true,
          markers: true,
          scrub: true,
        },
      });
    });
  });

  // const animate = useRef(0);
  // const card1 = useRef(0);
  // const card2 = useRef(0);
  // const card3 = useRef(0);

  // useGSAP(function () {
  //   gsap.to(card1.current, {
  //     scrollTrigger: {
  //       trigger: card1.current,
  //       start: "top 20%",
  //       end: "bottom 15%",
  //       toggleActions: "play reverse play reverse reset",
  //       pin: true,
  //       markers: true,
  //       scrub: true,
  //     },
  //     // yPercent:-200,
  //     stagger: 0.5,
  //     ease: "none",
  //     duration: 1,
  //     scale:0.7,
  //     opacity: 0
  //   });
  // });

  // useGSAP(function () {
  //   gsap.to(card2.current, {
  //     scrollTrigger: {
  //       trigger: card2.current,
  //       start: "top 20%",
  //       end: "bottom 15%",
  //       toggleActions: "play reverse play reverse reset",
  //       pin: true,
  //       markers: true,
  //       scrub: true,
  //     },
  //     // yPercent:-200,
  //     stagger: 0.5,
  //     ease: "none",
  //     duration: 1,
  //     scale:0.7,
  //     opacity: 0
  //   });
  // });

  return (
    <div className="card  sticky top-0  w-full h-full">
      <img className="object-contain" src={src} alt="" />
    </div>
  );
};

export default Card;
