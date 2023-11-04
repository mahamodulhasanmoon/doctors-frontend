import addBannerImg from '../../../../assets/banner/addBanner.jpeg';
import tick from '../../../../assets/banner/tick.svg';
import phone from '../../../../assets/banner/phone.svg';
import location from '../../../../assets/banner/location.svg';

const AddBanner = () => {
  return (
    <div className="mx-auto w-full my-5 lg:my-[42px] p-4">
      <div className="max-w-screen-xl bg-[#1E6EA3] text-[#FFFFFF] rounded-lg mx-auto overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-5">
          <div className="md:col-span-2">
            <img className="w-full h-full object-cover" src={addBannerImg} alt="Banner" />
          </div>
          <div className="md:col-span-3 p-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center mb-10">
                <img className="w-9 h-9" src={tick} alt="" />
                <p className="ml-3 lg:text-3xl text-2xl font-normal">New Client Consultation</p>
              </div>
              <div className="flex items-center mb-10">
                <img className="w-9 h-9" src={tick} alt="" />
                <p className="ml-3 lg:text-3xl text-2xl font-normal">Full Body Adjustment.</p>
              </div>
              <div className="flex items-center mb-10">
                <img className="w-9 h-9" src={tick} alt="" />
                <p className="ml-3 lg:text-3xl text-2xl font-normal">Chiropractic care</p>
              </div>
              <div className="flex items-center mb-10">
                <img className="w-9 h-9" src={tick} alt="" />
                <p className="ml-3 lg:text-3xl text-2xl font-normal">Decompression Adjustment</p>
              </div>
            </div>
            <div>
              <div className="mb-11">
                <h2 className="text-2xl font-semibold">Information</h2>
                <div className="flex flex-wrap gap-12 mt-8">
                  <p className="flex items-center">
                    <span className="mr-3">
                      <img className="w-7 h-7" src={phone} alt="Phone" />
                    </span>
                    <span className="text-lg">(714) 843-4900</span>
                  </p>
                  <p className="flex items-center">
                    <span className="mr-3">
                      <img className="w-7 h-7" src={location} alt="Location" />
                    </span>
                    <span className="text-lg">Miami FL, New York City, Denver co</span>
                  </p>
                </div>
              </div>
              <button className="border border-gray-200 rounded-lg py-4 px-8 text-lg font-normal text-white">
                Book An Appointment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBanner;
