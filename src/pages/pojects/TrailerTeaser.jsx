// eslint-disable-next-line no-unused-vars
import React from "react";
import ProjectCard from "../../components/ProjectCard";
import Navbar from "../Navbar";
import Footer from "../Footer";
const TrailerTeaser = () => {
  const data = {
    id: 2,
    title: "Trailer/:teaser",
    font_size: "text-5xl",
    image: "/portfolio3.png",
    bgColor: "bg-blue-800",
    heading1: "CLIENT BRIEF",
    paragraph1:
      "TEC wanted to create an electrifying trailer for the Valorant community that would set the stage for their high-octane event—the LG UltraGear TEC Challenger Series VCT Off Season Official Event. The goal was to capture the event’s essence: a thrilling fusion of competitive spirit, top-tier gaming gear, and unmatched energy.",
    heading2: "OVERVIEW",
    paragraph2:
      "Valorant is all about precision, strategy, and adrenaline-pumping action, and this trailer had to embody that and more. The challenge? To craft a montage that was as crazy as the gameplay it showcased—a cinematic dive into the world of headshots, clutch plays, and unparalleled team synergy.",
    paragraph3:"Drawing inspiration from the intensity of Valorant’s signature style, the edit features lightning-fast cuts, dynamic transitions, and explosive highlights synced to a pulsating soundtrack. Every frame is a testament to the passion and skill of the players, while nodding to the incredible partnerships powering the event: Amazon India, Zotac Gaming, Intel, Crucial Memory, Asus, and Loco.",
    youtube_Link:"https://www.youtube.com/embed/D-H-GMveGwI?si=eU-r2MASxXPyAQox" ,
    youtube_Title: "YouTube video player",
  };
  return (
    <div>
      <Navbar />
      <ProjectCard data={data} />
      <Footer />
    </div>
  );
};

export default TrailerTeaser;
