import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-600">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full  grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-cyan-400">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full  grid sm:grid-cols-2 gap-8 px-4">
          <div className="text-4xl font-bold sm:text-right ">
            <p>Hi. I'm Rohan, nice to meet you. Please take a look around </p>
          </div>
          <div>
            <p>
              I am passionate about creating websites. It is a pursuit that
              brings me immense joy and satisfaction. Designing and developing
              websites allows me to exercise my creativity and technical skills,
              and I take pride in crafting digital experiences that are both
              visually appealing and functional. With every project, I strive to
              push my abilities and produce the best possible outcome.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
