import React from "react";
import c from "../assets/c.png";
import css from "../assets/css.png";
import github from "../assets/github.png";
import html from "../assets/html.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";

const Skill = () => {
  return (
    <div name="skills" className=" bg-[#0a192f]  text-gray-300">
      {/* container */}
      <div className="max-w-[1000px] mx-auto  p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-cyan-400">
            Experience
          </p>
          <p className="py-4">// These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto " src={html} alt="HTML" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto   " src={css} alt="CSS" />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto  " src={c} alt="C" />
            <p className="my-4">C</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto  " src={react} alt="react" />
            <p className="my-4">REACT.JS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto  " src={tailwind} alt="tailwind" />
            <p className="my-4">TAILWIND</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto  " src={github} alt="HTML" />
            <p className="my-4">GITHUB</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
