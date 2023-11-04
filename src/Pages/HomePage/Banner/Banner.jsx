import { Link } from "react-router-dom";
import VideoPlayer from "./VideoPlayer/VideoPlayer";

const Banner = () => {
  return (
    <>
    
      <div className="pt-[10rem] px-[2rem]  ">
        <div className=" w-full h-52 flex-col justify-center items-center gap-8  inline-flex">
          <div className="self-stretch text-center">
            <span className="text-neutral-800 text-5xl lg:text-[4.125rem] font-bold font-['Georgia'] leading-[4.4rem] lg:leading-[5.4rem]">
              Say Goodbye to Pain and{" "}
            </span>
            <span className="text-cyan-700   text-5xl lg:text-6xl font-bold font-['Georgia'] leading-10  lg:leading-[5.4rem]">
              Hello <br></br>{" "}
            </span>
            <p className="text-cyan-700 mt-7 text-5xl lg:text-6xl font-bold font-['Georgia'] leading-10 lg:leading-[5.4rem]">
              to a Life of Vitality
            </p>
          </div>
          <div className="self-stretch mt-2 mb-5 text-center text-zinc-600 text-xl font-normal font-['Open Sans'] leading-7">
            Get the pain relief you need and the life you deserve with Dr. Phils
            chiropractic services and experience <br></br> the benefits of the
            ring dinger technique
          </div>
        </div>
      
        <div className="flex items-center justify-center gap-6 mt-36 lg:mt-24">
          <Link
            to="/book"
            className=" lg:w-[218px] h-14 px-6 lg:px-[30px] bg-cyan-700 rounded-lg flex justify-center items-center gap-2.5 text-white text-sm lg:text-lg font-normal"
          >
            Book Appointment
          </Link>
          <Link
            to="/contact"
            className=" lg:w-[218px] h-14 px-6 lg:px-[63px] rounded-lg border border-cyan-700 flex justify-center items-center gap-2.5 text-cyan-700 text-sm lg:text-lg font-normal"
          >
            Contact Us
          </Link>
        </div>
      </div>

      <VideoPlayer></VideoPlayer>
    </>
  );
};

export default Banner;
