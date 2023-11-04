import AppoinmentForm2 from "../Banner/BookAppointmentBanner/BookAppoinmentForm2";

const BookAppointment = () => {
  return (
    <div className="mx-auto container">


      <div className="grid lg:grid-cols-2 -ml-24  my-12 gap-8 lg:mx-36   ">

<AppoinmentForm2/>

        <div className="lg:block hidden">
          {" "}
          <div className="mt-24 lg:pl-36 pl-0 mx-6 lg:mx-0">
            <div className="py-12 h-[30rem] px-10 bg-[#1E6EA3] rounded-lg flex flex-col justify-center items-center">
              <div className="w-full lg:w-[25rem]">
                <h2 className="text-white text-2xl font-semibold capitalize leading-normal text-left mb-10">
                  Working hours
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col justify-between space-y-4 text-left">
                    {/* Days Column */}
                    <span className="text-white text-lg font-normal leading-normal">
                      Thursday
                    </span>
                    <span className="text-white text-lg font-normal leading-normal">
                      Friday
                    </span>
                    <span className="text-white text-lg font-normal leading-normal">
                      Saturday
                    </span>
                    <span className="text-white text-lg font-normal leading-normal">
                      Sunday
                    </span>
                    <span className="text-white text-lg font-normal leading-normal">
                      Monday
                    </span>
                    <span className="text-white text-lg font-normal leading-normal">
                      Tuesday
                    </span>
                    <span className="text-white text-lg font-normal leading-normal">
                      Wednesday
                    </span>
                  </div>
                  <div className="flex flex-col justify-between space-y-4 text-right">
                    {/* Times Column */}
                    <span className="text-white text-lg font-normal leading-normal">
                      1-7 PM
                    </span>
                    <span className="text-white text-lg font-normal leading-normal">
                      Closed
                    </span>
                    <span className="text-white text-lg font-normal leading-normal">
                      Closed
                    </span>
                    <span className="text-white text-lg font-normal leading-normal">
                      Closed
                    </span>
                    <span className="text-white text-lg font-normal leading-normal">
                      1-6 PM
                    </span>
                    <span className="text-white text-lg font-normal leading-normal">
                      Closed
                    </span>
                    <span className="text-white text-lg font-normal leading-normal">
                      Closed
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* This outer div will show only on small screens */}
        {/* This div and its children will only be visible on small screens */}
        <div className="lg:hidden">
          <div className="mt-8 sm:mt-16 lg:mt-24 lg:pl-36 pl-0 mx-6 lg:mx-0">
            <div className="py-8 sm:py-10 lg:py-12 h-auto lg:h-[30rem] px-6 sm:px-10 lg:px-10 bg-[#1E6EA3] rounded-lg flex flex-col justify-center items-center">
              <div className="w-full lg:w-[25rem]">
                <h2 className="text-white text-lg sm:text-xl lg:text-2xl font-semibold capitalize leading-tight sm:leading-snug lg:leading-normal text-center mb-6 sm:mb-8 lg:mb-10">
                  Working hours
                </h2>
                <div className="grid grid-cols-2 gap-2 sm:gap-4">
                  <div className="flex flex-col justify-around space-y-2 sm:space-y-3 lg:space-y-4 text-center">
                    {/* Days Column */}
                    <span className="text-white text-base sm:text-lg font-normal leading-normal">
                      Thursday
                    </span>
                    <span className="text-white text-base sm:text-lg font-normal leading-normal">
                      Friday
                    </span>
                    <span className="text-white text-base sm:text-lg font-normal leading-normal">
                      Saturday
                    </span>
                    <span className="text-white text-base sm:text-lg font-normal leading-normal">
                      Sunday
                    </span>
                    <span className="text-white text-base sm:text-lg font-normal leading-normal">
                      Monday
                    </span>
                    <span className="text-white text-base sm:text-lg font-normal leading-normal">
                      Tuesday
                    </span>
                    <span className="text-white text-base sm:text-lg font-normal leading-normal">
                      Wednesday
                    </span>
                  </div>
                  <div className="flex flex-col justify-around space-y-2 sm:space-y-3 lg:space-y-4 text-center">
                    {/* Times Column */}
                    <span className="text-white text-base sm:text-lg font-normal leading-normal">
                      1-7 PM
                    </span>
                    <span className="text-white text-base sm:text-lg font-normal leading-normal">
                      Closed
                    </span>
                    <span className="text-white text-base sm:text-lg font-normal leading-normal">
                      Closed
                    </span>
                    <span className="text-white text-base sm:text-lg font-normal leading-normal">
                      Closed
                    </span>
                    <span className="text-white text-base sm:text-lg font-normal leading-normal">
                      1-6 PM
                    </span>
                    <span className="text-white text-base sm:text-lg font-normal leading-normal">
                      Closed
                    </span>
                    <span className="text-white text-base sm:text-lg font-normal leading-normal">
                      Closed
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Optionally, if you have a different component for large screens, include it here */}
          <div className="hidden lg:block">
            {/* ... Your large screen component code ... */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookAppointment;
