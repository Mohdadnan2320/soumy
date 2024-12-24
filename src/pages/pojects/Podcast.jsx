// eslint-disable-next-line no-unused-vars
import React from "react";
import ProjectCard from "../../components/ProjectCard";
import Navbar from "../Navbar";
import Footer from "../Footer";


const Podcast = () => {
  const data = {
    id: 0,
    title: "podCast interview",
    image: "/portfolio2.png",
    bgColor: "bg-red-600",
    heading1: "CLIENT BRIEF",
    paragraph1:
      "Two Side Gamers, a powerhouse YouTube channel with over 12Msubscribers, wanted to create an engaging and entertaining podcast-style video featuring two of Bollywood’s biggest stars, Nora Fatehi and Guru Randhawa. The goal was to deliver a lighthearted yet captivating segment that resonated with their diverse and ever-growing audience.",
    heading2: "OVERVIEW",
    paragraph2:
      "The video, titled Never Have I Ever With Nora Fatehi And Guru Randhawa - Two Side Gamers, takes a playful approach, showcasing the stars’ personalities in a relaxed and fun environment. With sharp editing and dynamic storytelling, the episode invites viewers into a candid conversation filled with laughter, surprises, and the infectious energy of both celebrities.",
    paragraph3:
      " The production skillfully balances the charm of Nora and Guru with the trademark style of Two Side Gamers. The editing elevates the content—from timely cuts to capturing genuine reactions—ensuring every moment is engaging. The result? A viral hit that has garnered over 2.3M views, proving the perfect blend of celebrity charisma and the channel’s creative finesse.",
      youtube_Link:"https://www.youtube.com/embed/rzYyfYGfYa8?si=NhF7AP79_Gygs51d" ,
      youtube_Title: "YouTube video player",

  };
  return <div>
    <Navbar />
    <ProjectCard data={data} />
    <Footer />
  </div>;
};

export default Podcast;
