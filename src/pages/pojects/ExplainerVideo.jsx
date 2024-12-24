// eslint-disable-next-line no-unused-vars
import React from 'react';
import ProjectCard from '../../components/ProjectCard';
import Navbar from "../Navbar";
import Footer from "../Footer";

const ExplainerVideo = () => {
    const data = [
        {
            id: 3,
            title: "EXPLAINER VIDEO",
            image: "/rahul.png",
            bgColor: "bg-blue-800",
            heading1: "CLIENT BRIEF",
            paragraph1:
              "Global Esports is a leading esports organization aiming to highlight the latest happenings in the gaming world. They need dynamic and engaging content that educates, informs, and excites the audience, keeping them up to date on everything from competitions to strategies.",
            heading2: "OVERVIEW",
            paragraph2: "Esports is evolving faster than ever, and Global Esports wanted to be at the forefront of the conversation. From discussing Team SouL’s journey at global competitions to breaking down top gaming mistakes, the goal was to create content that resonates with the ever-growing esports community.",
            project1_Title: "Project 1: Esports This Week: All Eyes on S8UL",
            project1_Paragraph: "The spotlight shines on Team SouL as they prepare to represent India at global competitions, with plenty of challenges ahead. This video takes you through the key moments of Indian esports, from Global Esports' triumph at VCT APAC to the buzz surrounding Pokémon Unite. The excitement, the drama, and the latest developments are all captured in one explosive episode of Esports This Week.",
            project2_Title: "Project 2: Top 5 Mistakes to Avoid in Pokémon Unite",
            project2_Paragraph: "For players wondering why they aren't climbing the ranks, this explainer video cuts to the chase with five common mistakes that hold players back in Pokémon Unite. From gameplay errors to strategic pitfalls, we dive into how to correct these blunders for better performance. Whether you’re a rookie or a seasoned player, this video is your key to improving in the game.",
            youtube_Link:"https://www.youtube.com/embed/CLwJF8cCOU4?si=84u4g-alrNzG7zJH" ,
            youtube_Title: "YouTube video player",
          },
          {
            id: 3,
            title: "GAMING HIGHLIGHT",
            image: "/rahul.png",
            bgColor: "bg-blue-800",
            heading1: "CLIENT BRIEF",
            paragraph1:
              "Global Esports aims to bring the excitement of live competitions to their fans by showcasing the most thrilling moments from their matches. They needed a highlight video that encapsulates the intensity, skill, and drama of each game, keeping their audience on the edge of their seats.",
            heading2: "OVERVIEW",
            paragraph2:
              "In esports, every moment counts, and nothing captures the energy of a match better than a perfectly timed highlight. For this project, I created a highlight video for Global Esports vs Prime 5 during Day 3 of the Skyesports Championship Series (SCS). The challenge was to curate the most impactful moments of the match and showcase Global Esports’ competitive spirit, all while maintaining the fast-paced, high-energy vibe of esports tournaments. From clutch plays to game-changing moves, this video delivers the hype that fans crave.",
              youtube_Link:"https://www.youtube.com/embed/2jHhnH3tCRo?si=_xwYsxoajuAy3TLP" ,
              youtube_Title: "YouTube video player",
            },
    ]
  return (
    <div>
      <Navbar />
        {data.map((data, i) =>{
            return (<ProjectCard data={data} key={i} />)
        } )}
        <Footer />
    </div>
  );
}

export default ExplainerVideo;
