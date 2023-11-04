import arrow from "../../../assets/banner/arrow.svg";

const Faqs = () => {
  return (
    <div className="  lg:w-[884px] mt-10 rounded-lg mx-5  mb-12 lg:mx-auto  max-w-screen-2xl">
      <div className="">
        <h1 className="text-center text-black  text-3xl lg:text-5xl font-semibold">
          FAQs
        </h1>
        <p className="text-center text-gray-800 mt-3 font-normal text-lg">
          Find answers to common questions about chiropractic care. From the
          benefits of <br /> treatment to what to expect during your first
          visit, we have got you covered.
        </p>
      </div>

      <div className="mt-16">
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
              disorders, particularly those related to the spine. Chiropractors
              use manual adjustments and other non-invasive techniques to
              alleviate pain and improve overall well-being.
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
              disorders, particularly those related to the spine. Chiropractors
              use manual adjustments and other non-invasive techniques to
              alleviate pain and improve overall well-being.
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
              disorders, particularly those related to the spine. Chiropractors
              use manual adjustments and other non-invasive techniques to
              alleviate pain and improve overall well-being.
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
              disorders, particularly those related to the spine. Chiropractors
              use manual adjustments and other non-invasive techniques to
              alleviate pain and improve overall well-being.
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
              disorders, particularly those related to the spine. Chiropractors
              use manual adjustments and other non-invasive techniques to
              alleviate pain and improve overall well-being.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
