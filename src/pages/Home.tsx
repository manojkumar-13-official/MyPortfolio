import React from "react";
import Image1 from "@/assets/portfolio_Image1.png";
import Image2 from "@/assets/portfolio_Image2.png";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { IoNewspaperOutline } from "react-icons/io5";
const Home = () => {
  return (
    <div className="flex justify-center mt-[7%] space-x-24">
      <div className="h-120 w-[30%] rounded-4xl p-10">
        <div className="mt-10">
          <h1 className="text-xl font-bold text-white">Hello, I'm</h1>
          <h2 className="text-3xl font-extrabold text-purple-600 mt-2">MANOJKUMAR A</h2>
          <h2 className="text-xl font-semibold text-white mt-2">FullStack Developer</h2>
        </div>
        <div className="mt-5 flex gap-3">
          <div className="h-10 w-10 bg-purple-700 rounded-full "><a href="https://github.com/manojkumar-13-official"><FiGithub  className="text-white font-extrabold h-10 w-7 ml-1.5"/></a></div>
          <div className="h-10 w-10 bg-purple-700 rounded-full"><a href="https://www.linkedin.com/in/manojkumar-a-0b05382b0/"><FaLinkedinIn className="text-white font-extrabold h-6 w-7 ml-1.5 mt-1.5"/></a></div>
          
        </div>
        <div className="mt-5">
          <button className="bg-purple-700 hover:bg-purple-800 text-white h-10 w-30 font-extrabold rounded-full text-center cursor-pointer ">
            <div className="flex justify-evenly">
              <IoNewspaperOutline className="mt-1 text-white font-extrabold text-xl"/>
              <p className="text-md font-bold">Resume</p>
            </div>
          </button>
        </div>
      </div>
      <div className=" relative h-120 w-[30%] rounded-full">
        <div className="absolute inset-0 bg-purple-600 rounded-full blur-lg"></div>
        <img src={Image1} alt="" className="relative rounded-full h-120 w-120 border-4 border-purple-600 object-cover"/>
      </div>
    </div>
  );
};

export default Home;
