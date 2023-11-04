import { Link } from "react-router-dom";
import p1 from "../../../../assets/banner/p1.png";
import p2 from "../../../../assets/banner/p2.png";
import p3 from "../../../../assets/banner/p3.png";
import star from "../../../../assets/banner/star.svg";

const ReviewBanner = () => {
  return (
    <div className="bg-[#1E6EA3] mx-auto w-full max-w-screen-2xl  lg:h-[729px] mt-[6rem] pb-12 ">
      <h1 className="font-sans pt-14 text-center text-white text-4xl lg:text-5xl font-semibold">
        What Our Patients Say
      </h1>
      <div className="grid lg:grid-cols-3 grid-cols-1 mx-12 lg:mx-24 gap-9">
        <div className=" bg-white shadow-xl px-9 py-10 rounded-lg mt-16">
          <div className="] flex items-center ">
            <img className="w-24 h-24 rounded-full" src={p1} alt="" />
            <div className="ml-4">
              <h3 className="text-lg font-semibold">Stevi S.</h3>
              <p className="text-lg font-normal text-[#5D6574]">
                Seal Beach, CA
              </p>
              <p className="flex items-center justify-between">
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
              </p>
            </div>
          </div>
          <p className="text-center mt-10 text-lg font-semibold italic">
            “I started coming here since I became pregnant with my first child!
            Phil is so professional and provides not only a wonderful service
            but a comfortable environment! I will be recommending him to all my
            friends and family and encourage anyone looking for help with there
            back to pay him a visit! Thank you Phil, will be seeing you again
            very soon!”
          </p>
        </div>
        <div className=" bg-white shadow-xl px-9 py-10 rounded-lg mt-16">
          <div className="w-[235px] flex items-center mx-auto">
            <img className="w-24 h-24 rounded-full" src={p2} alt="" />
            <div className="ml-4">
              <h3 className="text-lg font-semibold">Stevi S.</h3>
              <p className="text-lg font-normal text-[#5D6574]">
                Seal Beach, CA
              </p>
              <p className="flex items-center justify-between">
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
              </p>
            </div>
          </div>
          <p className="text-center mt-10 text-lg font-semibold italic">
            “Ive been having lower back pain for 3 months and finally decided to
            come to the Joint Chiropractor. Their receptionist, Selena has an
            Outstanding costumer service. Dr Phil is an amazing chiropractor
            that helped me eliminate my lower back pain. I recommend anyone to
            come to chiropractor Phil. He is good at making your day.”
          </p>
        </div>
        <div className=" bg-white shadow-xl px-9 py-10 rounded-lg mt-16">
          <div className="w-[235px] flex items-center mx-auto">
            <img className="w-24 h-24 rounded-full" src={p3} alt="" />
            <div className="ml-4">
              <h3 className="text-lg font-semibold">Stevi S.</h3>
              <p className="text-lg font-normal text-[#5D6574]">
                Seal Beach, CA
              </p>
              <p className="flex items-center justify-between">
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
              </p>
            </div>
          </div>
          <p className="text-center mt-10 text-lg font-semibold italic">
            “I called Phils office on a whim about a month ago and left a
            message. Not only did he call me back personally, but when I went in
            and told him about my previous chiropractic experiences, he was
            shocked and amused. I can see why now. Phil has gotten more movement
            out of my spine in 1 month versus 3 months with that other
            chiropractor.” See More
          </p>
        </div>
      </div>

      <div className="flex justify-center my-5 lg:justify-end lg:mr-24  ">
        <div className="w-[277px]  h-14 px-[30px] bg-cyan-400 rounded-lg justify-end items-center gap-2.5 inline-flex">
          <Link
            to="/"
            className="text-white text-lg font-normal font-['Open Sans']"
          >
            See All Reviews From Yelp
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ReviewBanner;
