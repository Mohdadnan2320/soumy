/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const About = () => {
  return (
    <div className="p-5 lg:mx-32">
      <Navbar />
      <div className=" h-auto my-5 lg:h-28  xl:mx-[155px]">
        <img
          className="h-full object-center object-cover"
          src="/soumy textt.png"
          alt="Soumy sharma"
        />
      </div>

      <div className="lg:flex lg:justify-center lg:items-center">
        <div className=" h-auto my-5 lg:w-[35vw] lg:h-[55vh] lg:my-0 xl:w-[35vw] xl:h-[55vh]">
          <img
            className="w-full h-full object-cover  lg:-mt-10 xl:-mt-10 xl:mx-10"
            src="/soumy photo.png"
            alt=""
          />
        </div>

        <div className="  lg:w-2/5">
          <p className="text-sm font-SequelSansMedium my-5 lg:text-lg">
            I am a dedicated video editor who loves turning ideas into engaging
            stories through visuals and sound. From refining the smallest
            details to crafting the bigger picture, I focus on creating content
            that connects with people.
          </p>
          <p className="text-sm font-SequelSansMedium my-5 lg:text-lg">
            With experience in a variety of projects, l enjoy the challenge of
            bringing creative visions to life. I&apos;m always excited to learn,
            grow, and collaborate with others to create something meaningful.
          </p>
        </div>
      </div>

      <div className="lg:flex  lg:mt-10">
        <div className="w-1/3 "></div>
        <div className=" my-5 lg:my-0 lg:w-1/3">
          <h3 className="text-lg font-SequelSans">Education</h3>
          <div className="my-2">
            <h4 className="text-base font-SequelSans">
              SAGE University Bhopal
            </h4>
            <p className="text-sm font-SequelSansMedium">
              2020 - 2024 - BTech <br />
              Mechanical Engineering
            </p>
          </div>
          <div className="my-2">
            <h4 className="text-base font-SequelSans">
              St Thomas Convent School
            </h4>
            <p className="text-sm font-SequelSansMedium">2020 -</p>
          </div>
        </div>

        <div className=" lg:w-1/3">
          <div>
            <h3 className="text-lg font-SequelSans">Experience</h3>
          </div>
          <div className="my-2">
            <h4 className="text-base font-SequelSans">Sportskeeda</h4>
            <p className="text-sm font-SequelSansMedium">Oct 2023 - Present</p>
          </div>
          <div className="my-2">
            <h4 className="text-base font-SequelSans">
              The Esports Club (TEC)
            </h4>
            <p className="text-sm font-SequelSansMedium">Jun 2022 - Jan 2023</p>
          </div>
          <div className="my-2">
            <h4 className="text-base font-SequelSans">
              Velocity Gaming - Freelance
            </h4>
            <p className="text-sm font-SequelSansMedium">Nov 2021 - Dec 2022</p>
          </div>
          <div className="my-2">
            <h4 className="text-base font-SequelSans">Global Esports</h4>
            <p className="text-sm font-SequelSansMedium">Oct 2021 - May 2022</p>
          </div>
          <div className="my-2">
            <h4 className="text-base font-SequelSans">
              Yuvin Esports • Freelance
            </h4>
            <p className="text-sm font-SequelSansMedium">Jun 2021 - Jun 2021</p>
          </div>
          <div className="my-2">
            <h4 className="text-base font-SequelSans">XTZ ESPORTS</h4>
            <p className="text-sm font-SequelSansMedium">Sep 2020 - May 2021</p>
          </div>
        </div>
      </div>

      <div className=" my-5 lg:flex lg:flex-col lg:my-0">
        <h3 className="my-2 text-lg font-SequelSans lg:my-1">Contact</h3>
        <h4 className="my-2 text-sm font-SequelSansMedium lg:my-1">+91-7879803661</h4>
        <p className="my-2 text-xs font-SequelSansMedium lg:my-1">
          workwithsoumy@gmail.com
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default About;
