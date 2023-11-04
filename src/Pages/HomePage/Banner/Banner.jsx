import { Link } from "react-router-dom";
import VideoPlayer from "./VideoPlayer/VideoPlayer";

const Banner = () => {
  return (
    <>    <div className="w-full   mx-auto  max-w-screen-2xl">
 
 <div className="grid grid-cols-1 md:grid-cols-6   lg:mr-24 ">
 <div className="pt-[5rem] px-[2rem] col-span-4 flex flex-col justify-start items-center">
    <div className="text-start lg:-ml-18 ">
      <span className="text-neutral-800 text-3xl lg:text-5xl font-bold font-['Georgia'] leading-10 lg:leading-[4.4rem]">
        Say Goodbye to Pain and{" "}
      </span>

      <p className="text-cyan-700 mt-3 text-3xl lg:text-5xl font-bold font-['Georgia'] leading-10 lg:leading-[4.4rem]">
        Hello to a Life of Vitality
      </p>
      <p className="text-zinc-600 self-start text-left text-lg font-normal font-['Open Sans'] leading-7 mt-2 mb-5">
        Get the pain relief you need and the life you deserve with <br/> Dr. Phils chiropractic services and experience  the benefits<br></br> of the ring dinger technique
      </p>
    </div>
    <div className="flex justify-start self-start lg:ml-32 text-left flex-col lg:flex-row items-start gap-6 mt-6 lg:mt-4">
  <Link
    to="/book"
    className="w-full lg:w-auto h-14 px-6 bg-cyan-700 rounded-lg flex justify-center items-center gap-2.5 text-white text-sm lg:text-lg font-normal lg:ml-0 ml-4"
  >
    Book Appointment
  </Link>
  <Link
    to="/contact"
    className="w-full lg:mb-0 lg:ml-0  ml-3 mb-6 lg:w-auto h-14 px-6 lg:px-[20px] rounded-lg border border-cyan-700 flex justify-center items-center gap-2.5 text-cyan-700 text-sm lg:text-lg font-normal mt-4 lg:mt-0"
  >
    Contact Us
  </Link>
</div>



  </div>

  <div className="col-span-1 lg:pr-24 md:col-span-2 flex justify-center items-center">
    <div className="  md:w-[400px] bg-cyan-700 shadow-lg p-6 rounded-lg text-center">
      <div>
        <h1 className="text-xl md:text-2xl font-semibold text-white mb-4">Need Relief?</h1>
        <p className="text-sm md:text-base text-white mb-4">Reserve your free new patient consultation by booking online today!</p>
        <span className="text-xs md:text-sm text-white mb-4">Begin with a free initial consultation for new patients (clinical history) with the chiropractor to determine if we can provide assistance. If not, we will guide you to someone who can.</span>
      </div>
      <div className="flex justify-center mt-6">
        <button className="w-[200px] h-[40px] bg-amber-300 rounded-lg text-black text-base font-bold font-sans hover:bg-amber-400">
          Book Appointment Now
        </button>
      </div>
    </div>
  </div>
</div>

     
</div>
      <VideoPlayer></VideoPlayer>
    </>
  );
};

export default Banner;
