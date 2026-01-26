import Image1 from "@/assets/portfolio_Image1.png";
import Image2 from "@/assets/Github_Profile.png"
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { IoNewspaperOutline } from "react-icons/io5";
const Home = () => {
  return (
    <div className="flex justify-center min-h-screen flex-col-reverse sm:flex-row max-sm:items-center mt-[20%] md:mt-[15%] lg:mt-[10%] xl:mt-[8%] space-x-24">
      <div className="h-100 w-[30%] rounded-4xl pt-10">
        <div className="mt-10">
          <h1 className="text-xl font-bold xl:text-2xl text-white">Hello, I'm</h1>
          <h2 className="text-3xl xl:text-4xl font-extrabold text-purple-600 mt-2">MANOJKUMAR</h2>
          <h2 className="text-lg xl:text-2xl font-semibold text-white mt-2">FullStack Developer</h2>
        </div>
        <div className="mt-5 flex gap-3">
          <div className="h-10 w-10 xl:h-15 xl:w-15 border-2 border-white bg-purple-700 rounded-full "><a href="https://github.com/manojkumar-13-official"><FiGithub  className="text-white font-extrabold h-10 w-7 ml-1 xl:h-15 xl:w-10 xl:ml-2"/></a></div>
          <div className="h-10 w-10 xl:h-15 xl:w-15 border-2 border-white bg-purple-700 rounded-full"><a href="https://www.linkedin.com/in/manojkumar-a-"><FaLinkedinIn className="text-white font-extrabold h-6 w-7 ml-1 mt-1.5 xl:h-9 xl:w-10 xl:ml-2 xl:mt-2.5"/></a></div>
          
        </div>
        <div className="mt-5">
          <button className="bg-purple-700 hover:bg-purple-800 text-white border-2 border-white h-10 w-30 xl:h-15 xl:w-35 font-extrabold rounded-full text-center cursor-pointer ">
            <div className="flex justify-evenly">
              <IoNewspaperOutline className="mt-1 text-white font-extrabold text-xl xl:text-2xl"/>
              <p className="text-md xl:text-xl font-bold">Resume</p>
            </div>
          </button>
        </div>
      </div>
      <div className="relative h-70 w-70 sm:h-80 sm:w-80 md:h-90 md:w-90 lg:h-100 lg:w-100 xl:w-110 xl:h-110 rounded-full">
        <div className="absolute h-70 sm:h-80 md:h-90 lg:h-100 xl:h-110 inset-0 bg-purple-600 rounded-full blur-2xl"></div>
        <img src={Image2} alt="profile" className="absolute rounded-full h-70 w-70 sm:h-80 sm:w-80 md:w-90 md:h-90 lg:w-100 lg:h-100 xl:w-110 xl:h-110 border-4 border-purple-600 object-cover"/>
      </div>
    </div>
  );
};

export default Home;
