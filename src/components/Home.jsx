import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full ">
        <p className="text-cyan-300">Hi, my name is </p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Rohan Poudel
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a Web Developer{" "}
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I am Rohan Poudel, a college student with a dream of becoming a
          programmer. I am dedicated and driven to achieve my goals, and I am
          constantly seeking out new opportunities to learn and grow as a
          developer. I am a hardworking and motivated individual, and I am
          determined to succeed in the field of programming. I am always looking
          for ways to improve my skills and further my knowledge, and I am
          dedicated to becoming the best programmer I can be. With my
          determination and dedication, I am well on my way to achieving my
          dream of becoming a successful programmer.
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-cyan-400 hover:border-cyan-600">
            View Projects
            <span className=" group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
