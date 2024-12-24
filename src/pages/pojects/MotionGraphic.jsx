// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import ProjectCard from '../../components/ProjectCard';
import Navbar from "../Navbar";
import Footer from "../Footer";
const MotionGraphic = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);
    const data = {
        id: 0,
        title: "Motion Graphic",
        image: "/portfolio1.png",
        bgColor: "bg-blue-800",
        heading1: "CLIENT BRIEF",
        paragraph1:
          "Global Esports aims to bring the excitement of live competitions to their fans by showcasing the most thrilling moments from their matches. They needed a highlight video that encapsulates the intensity, skill, and drama of each game, keeping their audience on the edge of their seats.",
        heading2: "OVERVIEW",
        paragraph2:
          "In esports, every moment counts, and nothing captures the energy of a match better than a perfectly timed highlight. For this project, I created a highlight video for Global Esports vs Prime 5 during Day 3 of the Skyesports Championship Series (SCS). The challenge was to curate the most impactful moments of the match and showcase Global Esports' competitive spirit, all while maintaining the fast-paced, high-energy vibe of esports tournaments. From clutch plays to game-changing moves, this video delivers the hype that fans crave.",
          youtube_Link:"https://www.youtube.com/embed/poKH709nobs?si=CxRXE6rH3BaX9hGd" ,
          youtube_Title: "YouTube video player",
        };

  return (
    <div>
      <Navbar />
          <ProjectCard data={data} />
          <Footer />
    </div>
  );
}

export default MotionGraphic;
