/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

// eslint-disable-next-line react/prop-types
const ProjectCard = ({ data }) => {
  // eslint-disable-next-line react/prop-types
  const {
    id,
    title,
    image,
    heading1,
    paragraph1,
    heading2,
    paragraph2,
    paragraph3,
    // eslint-disable-next-line react/prop-types
    font_size,
    project1_Title,
    project1_Paragraph,
    project2_Title,
    project2_Paragraph,
    youtube_Link,
    youtube_Title,
  } = data;

  let fonts_sizes = font_size ? font_size : "text-6xl ";

  return (
    <div className="w-full p-5 md:min-h-svh">
      <div>
        <div className="py-5">
          <h1 className={`font-SequelSans text-center ${fonts_sizes}`}>
            {title}
          </h1>
        </div>
        <div>
          <iframe
          className="w-full h-[30vh] lg:h-screen lg:mx-auto lg:w-[760px] xl:w-[1080px] xl:mx-auto 2xl:w-[2300px]"
            src={youtube_Link}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={youtube_Title}
          />
        </div>
        <div className="my-10 lg:mx-28 lg:my-16">
          <h3 className="text-lg font-SequelSans lg:text-3xl lg:my-5">{heading1}</h3>
          <p className="text-sm font-SequelSansMedium lg:text-xl">{paragraph1}</p>

          <h3 className="text-lg font-SequelSans mt-5 lg:text-3xl lg:mt-16 lg:my-5">{heading2}</h3>
          <p className="text-sm font-SequelSansMedium lg:text-xl">{paragraph2}</p>

          <p className="text-sm font-SequelSansMedium mt-5 lg:text-xl">{paragraph3}</p>
        </div>
        <div className="my-10 lg:mx-28 lg:my-16">
          <h3 className="text-lg font-SequelSans lg:text-3xl lg:my-5">{project1_Title}</h3>
          <p className="text-sm font-SequelSansMedium lg:text-xl">{project1_Paragraph}</p>
        </div>
        <div className="my-10 lg:mx-28 lg:my-16">
          <h3 className="text-lg font-SequelSans lg:text-3xl lg:my-5">{project2_Title}</h3>
          <p className="text-sm font-SequelSansMedium lg:text-xl">{project2_Paragraph}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
