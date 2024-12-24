/* eslint-disable no-unused-vars */
import React from "react";

const ProjectShortVideoCard = () => {
  return (
    <div className="w-full p-5">
      <div>
        <div className="py-5">
          <h1 className={`text-6xl font-SequelSans text-center`}>
            Short Video
          </h1>
        </div>
        <div className="flex justify-center items-center overflow-hidden">
          <div className="w-[30vw] h-[60vh] hover:w-screen transition duration-100 ease-in bg-red-500"></div>
          <div className="w-[30vw] h-[60vh] hover:w-screen transition duration-100 ease-in bg-yellow-500 "></div>
          <div className="w-[30vw] h-[60vh] hover:w-screen transition duration-100 ease-in bg-orange-500 "></div>
        </div>

        <div className="my-10">
          <p className="text-sm font-SequelSansMedium">
          Immerse yourself in a world of captivating stories, told in bite-sized
          brilliance. Our project section showcases a curated collection of
          short-form video content, designed to engage, inspire, and entertain.
          From quick-hit news updates to in-depth features, our videos offer a
          fresh perspective on the world around us.
          </p>

          <p className="text-sm font-SequelSansMedium mt-5">
            Join us on a visual journey as we explore the latest trends,
            celebrate human stories, and delve into the depths of culture and
            creativity. Our short-form videos are meticulously crafted to
            deliver impactful messages in a concise and compelling format.
            Whether you&apos;re seeking a quick laugh, a thought-provoking
            insight, or a dose of inspiration, our project section has something
            for everyone.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectShortVideoCard;
