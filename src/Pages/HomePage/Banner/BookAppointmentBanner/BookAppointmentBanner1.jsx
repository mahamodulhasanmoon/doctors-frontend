import avatar from "../../../../assets/banner/avatar.png";

const BookAppointmentBanner1 = () => {
  return (
     <div className="mx-auto w-full mt-10 md:mt-[147px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        
        
        <div className="mr-4 pb-10 md:mr-7 pl-6 md:pl-[130px] pr-4 md:pr-6 bg-[#1E6EA3] text-[#FFFFFF]">
          <div className="mt-8 md:mt-[82px]">
            <h1 className="font-sans text-[48px] font-semibold">
            Enhance Wellness with Chiropractic Care
            </h1>
            <p className="font-normal mt-8 font-sans text-lg text-start">
              Discover the transformative power of chiropractic care at our
              clinic. Our skilled chiropractors are dedicated to enhancing your
              well-being through tailored treatments that address a wide range
              of musculoskeletal issues. With a focus on natural healing and
              pain relief, we offer personalized care that empowers you to
              regain control over your health and live life to the fullest. From
              reducing discomfort to improving mobility, our holistic approach
              helps you achieve optimal balance and vitality. Join us on the
              journey to a healthier, pain-free, and more vibrant life through
              the art of chiropractic care.
            </p>
            <div className="flex items-center mt-[70px]">
              <img
                className="w-24 h-24 rounded-full object-cover object-top"
                src={avatar}
                alt=""
              />
              <div className="ml-[30px] text-[18px] font-normal ">
                <h2>Dr. Phill,</h2>
                <p>D.C. (Doctor of Chiropractic)</p>
              </div>
            </div>
          </div>
        </div>
        <div className="px-12 lg:px-2 mr-[130px]">
          <div className="text-start">
            <h1 className="text-black text-[48px] font-semibold">
              Book your Appointment
            </h1>
            <p className=" mt-4 text-black font-normal text-lg">
              Schedule your appointment today and take the first step towards a
              healthier, pain-free future. Our dedicated team is ready to
              provide you with the care and support you need to achieve your
              wellness goals.
            </p>
          </div>
          <fieldset className=" rounded-md  ">
            <h1 className="text-lg text-black pb-4 mt-4 font-semibold">
              Book Appointment
            </h1>
            <form className="grid grid-cols-6 gap-7 ">
              <div className="col-span-full sm:col-span-3">
                <input
                  className="bg-white text-black  w-full border-2 border-gray-200 outline-none p-3 rounded-md"
                  placeholder="Name"
                  type="text"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <input
                  className="bg-white text-black w-full border-2 border-gray-200 outline-none p-3 rounded-md"
                  placeholder="Email"
                  type="email"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <input
                  className="bg-white text-black w-full border-2 border-gray-200 outline-none p-3 rounded-md"
                  placeholder="Phone"
                  type="number"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <select className="w-full text-black bg-white border-2 border-gray-200 outline-none p-3 rounded-md">
                  <option value="volvo">Department</option>
                  <option value="saab">Department2</option>
                </select>
              </div>
              <div className="col-span-full sm:col-span-3">
                <select className="w-full text-black bg-white border-2 border-gray-200 outline-none p-3 rounded-md">
                  <option value="volvo">Doctor</option>
                  <option value="saab">Doctor 1</option>
                </select>
              </div>
              <div className="col-span-full sm:col-span-3">
                <input
                  className="bg-white text-black w-full border-2 border-gray-200 outline-none p-3 rounded-md"
                  placeholder="Date"
                  type="date"
                />
              </div>
              <div className="col-span-full">
                <textarea
                  placeholder="Write your message here..."
                  className="w-full text-black bg-white border-2 border-gray-200 outline-none p-3 rounded-md"
                  name=""
                  id=""
                  cols="30"
                  rows="5"
                ></textarea>
              </div>
              <div className="col-span-full sm:col-span-3 ">
                <input
                  className="  bg-[#1E6EA3] hover:bg-[#3e95cf] rounded-lg p-3 w-8/12 text-lg font-normal text-white cursor-pointer "
                  type="submit"
                  value="Book An Appointment"
                />
              </div>
            </form>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default BookAppointmentBanner1;
