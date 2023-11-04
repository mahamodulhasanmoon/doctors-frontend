import logo from "../../../public/logo.png";
import { MdOutlineCall } from "react-icons/md";
import { TbCurrentLocation } from "react-icons/tb";
import Faqs from "../HomePage/Faqs/Faqs";
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

        <div className="flex items-center justify-center w-[45rem] shadow-xl py-[4.6rem]">
          {/* Author: FormBold Team */}
          <div className="    bg-white ">
            <div className=" my-8 justify-start items-center">
              <h1 className="text-center text-[#262626] text-2xl font-semibold font-['Open Sans'] capitalize leading-10">
                book your appointment
              </h1>
              <p className="text-center mb-2 text-gray-500 text-lg font-normal font-['Open Sans'] leading-7">
                We will confirm your appointment within 2 hours
              </p>
            </div>
            <form>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div className="mb-4">
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Name"
        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-4 text-base font-medium text-[#5D6574] outline-none focus:border-[#6A64F1] focus:shadow-md"
      />
    </div>
    <div className="mb-4">
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Email"
        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-4 text-base font-medium text-[#5D6574] outline-none focus:border-[#6A64F1] focus:shadow-md"
      />
    </div>
    <div className="mb-4">
      <input
        type="number"
        name="number"
        id="number"
        placeholder="Phone"
        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-4 text-base font-medium text-[#5D6574] outline-none focus:border-[#6A64F1] focus:shadow-md"
      />
    </div>
    <div className="mb-4">
      <input
        type="text"
        name="department"
        id="department"
        placeholder="Department"
        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-4 text-base font-medium text-[#5D6574] outline-none focus:border-[#6A64F1] focus:shadow-md"
      />
    </div>
    <div className="mb-4">
      <input
        type="text"
        name="doctor"
        id="doctor"
        placeholder="Doctor"
        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-4 text-base font-medium text-[#5D6574] outline-none focus:border-[#6A64F1] focus:shadow-md"
      />
    </div>
    <div className="mb-4">
      <input
        type="date"
        name="date"
        id="date"
        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-4 text-base font-medium text-[#5D6574] outline-none focus:border-[#6A64F1] focus:shadow-md"
      />
    </div>
  </div>
  <div className="mb-4">
    <textarea
      placeholder="Write your message here..."
      id="message"
      name="message"
      className="w-full border bg-white border-[#e0e0e0] p-4 rounded-md focus:outline-none focus:border-[#6A64F1] focus:shadow-md"
      rows="5"
    ></textarea>
  </div>
  <div className="flex justify-center mb-4">
    <button
      type="submit"
      className="w-60 h-14 bg-cyan-400 rounded-lg flex justify-center items-center gap-2.5 text-[#262626] text-lg font-normal font-['Open_Sans']"
    >
      Book an Appointment
    </button>
  </div>
</form>
          </div>
        </div>

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
