import React from "react";
import cloud from "../assets/cloud.png";
import finance from "../assets/finance.png";
import clothing from "../assets/clothing.png";
import money from "../assets/money.png";

const Work = () => {
  return (
    <div name="work" className=" w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-cyan-400">
            Work
          </p>
          <p className="py-6">//Check out my some works </p>
        </div>

        {/* container */}

        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-4">
          <div
            style={{ backgroundImage: `url(${finance})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div "
          >
            {/* hover */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Finance React JS App
              </span>
              <div className="pt-8 text-center">
                <a href="https://github.com/rohan7408/finance-web-react.git">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold ">
                    Code
                  </button>
                </a>
                <a href="https://rohan7408.github.io/finance-web-react/">
                  <button className="  text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold ">
                    Demo
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${cloud})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div "
          >
            {/* hover */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Cloud React JS App
              </span>
              <div className="pt-8 text-center">
                <a href="https://github.com/rohan7408/cloud-react-web.git">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold ">
                    Code
                  </button>
                </a>
                <a href="">
                  <button className=" hidden text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-200 font-bold ">
                    Demo
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${clothing})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div "
          >
            {/* hover */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Clothing Shop
              </span>
              <div className="pt-8 text-center">
                <a href="https://github.com/rohan7408/shoppingcart.git">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold ">
                    Code
                  </button>
                </a>
                <a href="https://www.shopverse.tk/">
                  <button className="  text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold ">
                    Demo
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${money})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div "
          >
            {/* hover */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React JS App
              </span>
              <div className="pt-8 text-center">
                <a href="https://github.com/rohan7408/ReactWeb.git">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold ">
                    Code
                  </button>
                </a>
                <a href="">
                  <button className=" hidden text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-200 font-bold ">
                    Demo
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
