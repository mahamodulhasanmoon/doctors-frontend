import { MdOutlineCall } from "react-icons/md";
// import massageImage from "../../../public/DSC_86951.png";

import BookAppointment from "../HomePage/BookAppointment/BookAppointment";
import Faqs from "../HomePage/Faqs/Faqs";
const TalkingPage = () => {
  return (
    <div>
      <div className="mx-auto w-full max-w-screen-2xl bg-[#D5F8FE] ">
        <div className=" mx-6 lg:mx-28">
          <div className="py-12 px-8 grid grid-cols-1 gap-3 lg:grid-cols-3 lg:gap-8">
            {/* First Column (Image) */}
            <div className="col-span-1 bg-[#D5F8FE] rounded-lg">
              <img
                className="mx-auto w-[40rem] lg:w-[35rem] lg:h-[29rem] rounded-xl"
                // src={massageImage}
                alt="Massage"
              />
            </div>

            {/* Second Column (Text) */}
            <div className="col-span-1 bg-[#D5F8FE] rounded-lg p-8">
              <h1 className="text-neutral-800 text-2xl font-semibold font-['Open Sans'] capitalize leading-10">
                Dr. Phill, D.C. (Doctor of Chiropractic)
              </h1>
              <p className="text-neutral-800 text-lg font-normal font-['Open Sans'] leading-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum ultrices bibendum arcu, sit amet fermentum odio
                placerat in. Sed nec tortor vel ex suscipit fringilla. Phasellus
                auctor turpis nec diam viverra, a rhoncus libero laoreet.
                Curabitur efficitur justo et massa commodo, non fringilla urna
                tincidunt...
              </p>
            </div>

            {/* Third Column (Contact) */}
            <div className="col-span-1 bg-[#D5F8FE] rounded-lg p-8">
              <p className="text-neutral-800 text-2xl font-semibold font-['Open Sans'] capitalize leading-[43.20px]">
                Want to Talk
              </p>
              <p className="flex items-center text-zinc-600 text-lg font-normal font-['Open Sans'] capitalize leading-[43.20px]">
                {" "}
                <MdOutlineCall className="text-bold"></MdOutlineCall> +1
                714843-4900
              </p>
              <div className="w-[231px] h-14 px-[30px] bg-cyan-400 rounded-lg justify-center items-center gap-2.5 inline-flex">
                <div className="text-neutral-800 text-lg font-normal font-['Open Sans']">
                  Get an Appointment
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Book appointment */}
      <BookAppointment></BookAppointment>
      {/* FAQS */}
      <Faqs></Faqs>
    </div>
  );
};

export default TalkingPage;
