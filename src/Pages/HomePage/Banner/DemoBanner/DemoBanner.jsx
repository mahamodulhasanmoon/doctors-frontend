import demoBanner from "../../../../assets/banner/demo1.png";
import demo2 from "../../../../assets/banner/demo2.svg";
import demo3 from "../../../../assets/banner/demo3.svg";
import demo4 from "../../../../assets/banner/demo4.svg";
// import arrow from "../../../../assets/banner/arrow.svg";
const DemoBanner = () => {
  return (
    <div className="mx-auto w-full max-w-screen-2xl  lg:h-[729px] mt-[6rem] pb-12 mb-[200px]">
      <div className=" mx-6 lg:mx-18 rounded-lg  ">
        <div className="">
          <h1 className="font-sans text-4xl text-neutral-800 lg:text-5xl text-center md:text-[54px] font-semibold">
            Guarantee Feel Free from <br></br> Pain Again
          </h1>
          <p className="text-center mt-3 font-normal  text-[#464D59] text-lg">
            Embrace a Life Free from Pain Once More. Our expert chiropractic
            care <br />
            is dedicated to helping you reclaim a pain-free, active lifestyle,
            so you can enjoy
            <br /> every moment to the fullest.
          </p>
        </div>

        <div className="grid lg:grid-cols-6 items-center mt-14">
          <div className=" lg:ml-24  col-span-3 lg:col-span-2  items-center">
            <img className="w-[661px]  rounded-lg" src={demoBanner} alt="" />
          </div>
          <div className=" col-span-2 lg:col-span-4 items-center lg:mx-0 mr-0  lg:mr-48 lg:ml-24">
            <div className="flex items-start my-16">
              <img className="w-20 h-20" src={demo2} alt="" />
              <div className="-mt-1.5 ml-6">
                <p className="text-[27px] text-neutral-800 font-semibold ">Affordable Price</p>
                <p className="text-lg text-neutral-800 text-start font-normal mt-6">
                  Top-notch chiropractic care without breaking the bank. Our
                  commitment to affordability ensures that you can prioritize
                  your health and wellness without financial stress
                </p>
              </div>
            </div>
            <div className="flex items-start my-16">
              <img className="w-20 h-20" src={demo3} alt="" />
              <div className="-mt-1.5 ml-6">
                <p className="text-[27px] font-semibold text-neutral-800 ">Best Service</p>
                <p className="text-lg text-start text-neutral-800 font-normal mt-6">
                  The pinnacle of chiropractic care with our award-winning
                  service, delivering the highest standards of excellence for
                  your health and well-being.
                </p>
              </div>
            </div>
            <div className="flex items-start my-16">
              <img className="w-20 h-20" src={demo4} alt="" />
              <div className="-mt-1.5 ml-6">
                <p className="text-[27px] font-semibold text-neutral-800 ">Humble Therapist</p>
                <p className="text-lg text-start font-normal text-neutral-800 mt-6">
                  At Humble Therapist, our compassionate and dedicated team is
                  committed to your holistic well-being, offering expert
                  chiropractic care to help you achieve a healthier and
                  pain-free life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="w-[884px] mt-44 rounded-lg mb-[60rem] mx-auto">
        <div className="w-[724px] mx-auto">
          <h1 className="text-center text-black text-[54px] font-semibold">
            FAQs
          </h1>
          <p className="text-center text-gray-800 mt-3 font-normal text-lg">
            Find answers to common questions about chiropractic care. From the
            benefits of treatment to what to expect during your first visit, we
            have got you covered.
          </p>
        </div> */}

        {/* <div className="mt-16">
          <div className="collapse  shadow-lg mb-1">
            <input type="checkbox" />
            <div className="collapse-title text-black  text-2xl font-semibold flex items-center justify-between">
              What is chiropractic care?
              <img src={arrow} alt="" />
            </div>
            <div className="collapse-content">
              <p className="text-[#464D59] text-lg font-normal">
                Chiropractic care is a healthcare discipline that focuses on
                diagnosing and treating musculoskeletal and nervous system
                disorders, particularly those related to the spine.
                Chiropractors use manual adjustments and other non-invasive
                techniques to alleviate pain and improve overall well-being.
              </p>
            </div>
          </div>
          <div className="collapse  shadow-lg mb-1">
            <input type="checkbox" />
            <div className="collapse-title text-black text-2xl font-semibold flex items-center justify-between">
              Is chiropractic care safe?
              <img src={arrow} alt="" />
            </div>
            <div className="collapse-content">
              <p className="text-[#464D59] text-lg font-normal">
                Chiropractic care is a healthcare discipline that focuses on
                diagnosing and treating musculoskeletal and nervous system
                disorders, particularly those related to the spine.
                Chiropractors use manual adjustments and other non-invasive
                techniques to alleviate pain and improve overall well-being.
              </p>
            </div>
          </div>
          <div className="collapse  shadow-lg mb-1">
            <input type="checkbox" />
            <div className="collapse-title text-black text-2xl font-semibold flex items-center justify-between">
              What conditions can chiropractic care address?
              <img src={arrow} alt="" />
            </div>
            <div className="collapse-content">
              <p className="text-[#464D59] text-lg font-normal">
                Chiropractic care is a healthcare discipline that focuses on
                diagnosing and treating musculoskeletal and nervous system
                disorders, particularly those related to the spine.
                Chiropractors use manual adjustments and other non-invasive
                techniques to alleviate pain and improve overall well-being.
              </p>
            </div>
          </div>
          <div className="collapse  shadow-lg mb-1">
            <input type="checkbox" />
            <div className="collapse-title text-black text-2xl font-semibold flex items-center justify-between">
              How long does a typical chiropractic session take?
              <img src={arrow} alt="" />
            </div>
            <div className="collapse-content">
              <p className="text-[#464D59] text-lg font-normal">
                Chiropractic care is a healthcare discipline that focuses on
                diagnosing and treating musculoskeletal and nervous system
                disorders, particularly those related to the spine.
                Chiropractors use manual adjustments and other non-invasive
                techniques to alleviate pain and improve overall well-being.
              </p>
            </div>
          </div>
          <div className="collapse  shadow-lg mb-1">
            <input type="checkbox" />
            <div className="collapse-title text-black text-2xl font-semibold flex items-center justify-between">
              Do I need a referral from a medical doctor to see a chiropractor?
              <img src={arrow} alt="" />
            </div>
            <div className="collapse-content">
              <p className="text-[#464D59] text-lg font-normal">
                Chiropractic care is a healthcare discipline that focuses on
                diagnosing and treating musculoskeletal and nervous system
                disorders, particularly those related to the spine.
                Chiropractors use manual adjustments and other non-invasive
                techniques to alleviate pain and improve overall well-being.
              </p>
            </div>
          </div>
        </div>
      </div> */}
    </div>

    
  );
};

export default DemoBanner;
