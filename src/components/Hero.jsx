import myPic from "../assets/my_pic.png";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div className="snap-center  mb-30 realtive h-[100vh] text-lime-200 flex flex-col-reverse md:flex md:flex-row ">
      <div className="  flex-1   flex items-start pt-50 flex-column justify-center h-[100vh] ">
        <div className=" h-[100%] felx flex-column text-end items-end max-md:text-center ">
          <div className=" text-5xl first-letter:text-teal-300 first-letter:text-6xl text-blue-300 my-10 font-extrabold ">
            Hii there , I'm <span className="text-cyan-400">YEDUKONDALU </span>{" "}
          </div>
          <div className=" text-5xl text-sky-300 font-extrabold ">
            <span className="text-rose-400">&&</span> I'm a
          </div>
          <div className=" text-5xl first-letter:text-slate-50 text-sky-300 font-extrabold ">
            <div>
              <Typewriter
                words={[
                  "Web Developer",
                  "Full-Stack Enthusiast",
                  "Creative Problem Solver",
                  "User-Centric Designer",
                  "Passionate Coder",
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={100}
                delaySpeed={1000}
              />
            </div>
          </div>
          <div className="flex  justify-end items-end mt-10">
            <p className=" text-3xl  w-[350px] text-center whitespace-break-spaces text-slate-300">
              Let's collaborate to craft remarkable digital experiences together
            </p>
          </div>
          <div className="flex justify-center items-center"><Link to='/' type="button" className=" mt-10  bg-blue-500 px-5 py-4 text-slate-100 font-bold text-xl rounded-md hover:bg-blue-600">Know Me !</Link></div>
        </div>
      </div>
      <div className=" flex-1  flex items-start justify-center  ">
        <img
          src={myPic}
          className=" h-[350px] min-h-[300px] max-h-[90%] aspect-auto"
          alt="venu_picture"
        />
      </div>
    </div>
  );
};

export default Hero;
