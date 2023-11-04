import logo from "../../../public/logo.png";
import { MdOutlineCall } from "react-icons/md";
import { TbCurrentLocation } from "react-icons/tb";
import Faqs from "../HomePage/Faqs/Faqs";
import AppoinmentForm2 from "../HomePage/Banner/BookAppointmentBanner/BookAppoinmentForm2";
const ContactUs = () => {
  return (
    <div className="mx-auto w-full max-w-screen-2xl">
      <div className="bg-[#D5F8FE] text-center pb-24 pt-12">
        <div className="self-stretch mx-2 lg:mx-0 lg:h-[141px] flex-col justify-start items-center gap-6 inline-flex">
          <h1 className="text-center text-neutral-800 text-[3.3rem] font-bold font-['Open Sans'] leading-[64.80px]">
            Contact Us
          </h1>
          <p className="self-stretch text-center text-zinc-600 text-xl font-normal font-['Open Sans'] leading-7">
            Get in touch with our dedicated team today. Whether you have
            questions, need to
            <br></br> schedule an appointment, or seek guidance on your path to
            wellness, we are here to
            <br></br> provide the support and information you need for your
            chiropractic journey.
          </p>
        </div>
      </div>

      {/* form start */}

      <div className="grid grid-cols-2 my-12 gap-8 mx-36   ">
        {/* Left Card: Book Appointment */}

<AppoinmentForm2/>

        {/* Right Card: Date List */}
        <div className="mt-24 pl-36  ">
          <div className="py-12 h-[30rem] px-10  rounded-lg flex-col justify-center items-center inline-flex">
            <div className="w-[397px] h-[314px] relative">
              <div className="w-[363px] h-[129px] left-0 top-[185px] absolute flex-col justify-start items-start gap-8 inline-flex">
                <div className="text-neutral-800 text-2xl font-semibold font-['Open Sans'] capitalize leading-[43.20px]">
                  Information
                </div>
                <div className="flex-col justify-start items-start gap-6 flex">
                  <div className="justify-start  gap-4 inline-flex">
                    <div  />
                    <p className="text-zinc-600 text-lg font-normal font-['Open Sans'] capitalize leading-[43.20px] flex items-center justify-start">
                      <MdOutlineCall className="w-8 h-8 mr-8 "></MdOutlineCall>{" "}
                      +1 714843-4900
                    </p>
                  </div>
                  <div className="justify-start  gap-4 inline-flex">
                    <div  />
                    <p className="items-center justify-start  text-zinc-600 text-lg font-normal font-['Open Sans'] capitalize leading-[43.20px] flex  ">
                      {" "}
                      <TbCurrentLocation className="w-8 h-8 mr-8 " /> P2F9+8G
                      Westminster, California, USA
                    </p>
                  </div>
                </div>
              </div>
              <img
                className="w-[127px] h-[56.11px] left-0 top-0 absolute"
                src={logo}
              />
              <div className="w-[397px] left-0 top-[71px] absolute text-zinc-600 text-lg font-normal font-['Open Sans'] leading-7">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec
                justo ac lectus fermentum laoreet. Nullam facilisis,
              </div>
            </div>
          </div>
        </div>
      </div>
      <Faqs></Faqs>
    </div>
  );
};

export default ContactUs;
