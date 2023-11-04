import avatar from "../../../../assets/banner/avatar.png";
import AppoinmentForm from "./AppoinmentForm";

const BookAppointmentBanner1 = () => {
  return (
     <div className="mx-auto container w-full mt-10 md:mt-[147px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        
        
        <div className=" pb-10 pl-6 bg-[#1E6EA3] text-[#FFFFFF]">
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
        
<AppoinmentForm/>
      </div>
    </div>
  );
};

export default BookAppointmentBanner1;
