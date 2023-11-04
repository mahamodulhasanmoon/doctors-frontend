import massageImage from "../../../public/image 58.jpg";
import massageImage2 from "../../../public/image 59.jpg";
import Faqs from "../HomePage/Faqs/Faqs";

const Service = () => {
  return (
    <div className="mx-auto mt-12 w-full max-w-screen-2xl">
      {/* About section first para */}
      <section>
        <div className="mx-28  sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div className="max-w-lg">
              <h2 className="text-[3.375rem] mb-6 font-bold text-gray-900 sm:text-4xl">
              Service Area
              </h2>
              <span
                className=" w-full text-gray-600 text-md"
                style={{
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
               we are committed to providing top-notch chiropractic care to <br></br> the community. 
               Our experienced team is dedicated to <br></br> addressing your unique health needs, whether
                you are seeking pain relief, improved mobility, 
               or overall wellness, right here <br></br> in your local area.
              </span>

              <div className="mt-8">
                <a
                  href="#"
                  className="text-blue-500 hover:text-blue-600 font-medium"
                >
                  Learn more about us <span className="ml-2">&#8594;</span>
                </a>
              </div>
            </div>
            <div className="mr-12 border-solid flex justify-center items-center border-[#9ED7CE] border-8  md:mt-0">
              <img
                src={massageImage}
                alt="About Us Image"
                className="object-cover  rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>
      {/* About section dr phil para */}
      <div className="mx-28  sm:flex items-center max-w-screen-xl">
      <div className="sm:w-1/2 p-10 relative">
  <div className="image object-center text-center">
  <div className="border-solid border-[#9ED7CE] border-8 top-0 left-0 w-[24rem] h-[28rem] pointer-events-none"></div>
    <img src={massageImage2} alt="Company Image" className="z-10 absolute bottom-6 left-6 w-[24rem] h-[28rem]" />
   
  </div>
</div>



        <div className="sm:w-1/2 p-5 -ml-24 ">
          <div className="text">
            <span className="text-gray-800 text-xl -ml-24 font-bold ">
            Dr. Phil Chiropractor
            </span>
           
            <div className="w-[799px] text-justify -ml-24 text-zinc-600 text-lg font-normal font-['Open Sans'] leading-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ultrices bibendum arcu, sit amet fermentum odio placerat in. Sed nec tortor vel ex suscipit fringilla. Phasellus auctor turpis nec diam viverra, a rhoncus libero laoreet. Curabitur efficitur justo et massa commodo, non fringilla urna tincidunt. Vivamus vehicula, purus nec consectetur efficitur, purus lectus vehicula erat, ac dictum odio ante et nulla. In eu orci et ante efficitur dictum eget id purus. Integer rhoncus libero sed purus ultrices, vel congue mi efficitur.<br/>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean euismod, dui at ultricies congue, justo libero suscipit odio, in pellentesque lectus turpis in turpis. Donec ut libero vitae neque scelerisque rhoncus. Sed a ipsum non mi pellentesque malesuada id eget purus. Suspendisse sagittis, ante nec lacinia volutpat, tortor urna consequat arcu, sit amet sollicitudin quam metus vel ex. Sed vestibulum, nisl ac tincidunt condimentum, urna turpis laoreet arcu, et lacinia odio augue eu arcu.</div>
          </div>
          <div className="w-[231px] -ml-24 mt-6 h-14 px-[30px] bg-cyan-700 rounded-lg justify-center items-center gap-2.5 inline-flex">
  <div className="text-white text-lg font-normal font-['Open Sans']">Get an Appointment</div>
</div>
        </div>
      </div>
      <Faqs></Faqs>
    </div>
  );
};

export default Service;
