const BookAppointment = () => {
  return (
    <div className="mx-auto w-full max-w-screen-2xl">
      {/* Navbar */}
      {/* <div className="h-20 px-36 py-12 border-b border-zinc-300 flex justify-around lg:justify-between items-center">
          <img className="w-32 h-14" src="https://via.placeholder.com/127x56" alt="Logo" />
          <nav className="flex items-center gap-10">
            <div className="text-[#262626] text-lg font-normal font-['Open Sans'] cursor-pointer hover:underline">Home</div>
            <div className="flex items-center gap-1">
              <div className="text-[#262626] text-lg font-normal font-['Open Sans'] cursor-pointer hover:underline">Services</div>
              <div className="w-4 h-4 relative">
                
              </div>
            </div>
            <div className="flex items-center gap-1">
              <div className="text-[#262626] text-lg font-normal font-['Open Sans'] cursor-pointer hover:underline">Service Area</div>
              <div className="w-4 h-4 relative">
               
              </div>
            </div>
            <div className="text-[#262626] text-lg font-normal font-['Open Sans'] cursor-pointer hover:underline">Dr. Phil</div>
            <div className="text-[#262626] text-lg font-normal font-['Open Sans'] cursor-pointer hover:underline">About Us</div>
            <div className="text-[#262626] text-lg font-normal font-['Open Sans'] cursor-pointer hover:underline">Contact Us</div>
          </nav>
          <button className="w-44 h-14 px-7 bg-cyan-400 rounded-lg flex justify-center items-center">
            <div className="text-[#262626] text-lg font-normal font-['Open Sans']">Appointment</div>
          </button>
        </div> */}

      {/* form start */}

      <div className="grid lg:grid-cols-2 -ml-24  my-12 gap-8 lg:mx-36   ">
        {/* Left Card: Book Appointment */}

        <div className="flex items-center justify-center mx-auto  lg:w-[45rem] shadow-xl py-[4.6rem]">
          {/* Author: FormBold Team */}
          <div className="    bg-white ">
            <div className=" my-8 justify-start items-center">
              <h1 className="text-center text-[#262626] text-2xl font-semibold font-['Open Sans'] capitalize leading-10">
                Book your appointment
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
      className="w-60 h-14 bg-cyan-400 rounded-lg flex justify-center items-center gap-2.5 text-[#262626] text-lg font-normal "
    >
      Book an Appointment
    </button>
  </div>
</form>


          </div>
        </div>

        {/* Right Card: Date List */}
        <div className="lg:block hidden"> {/* This will hide the component on screens smaller than 'lg' */}
  <div className="mt-24 lg:pl-36 pl-0 mx-6 lg:mx-0">
    <div className="py-12 h-[30rem] px-10 bg-[#1E6EA3] rounded-lg flex flex-col justify-center items-center">
      <div className="w-full lg:w-[25rem]">
        <h2 className="text-white text-2xl font-semibold capitalize leading-normal text-left mb-10">
          Working hours
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col justify-between space-y-4 text-left">
            {/* Days Column */}
            <span className="text-white text-lg font-normal leading-normal">Thursday</span>
            <span className="text-white text-lg font-normal leading-normal">Friday</span>
            <span className="text-white text-lg font-normal leading-normal">Saturday</span>
            <span className="text-white text-lg font-normal leading-normal">Sunday</span>
            <span className="text-white text-lg font-normal leading-normal">Monday</span>
            <span className="text-white text-lg font-normal leading-normal">Tuesday</span>
            <span className="text-white text-lg font-normal leading-normal">Wednesday</span>
          </div>
          <div className="flex flex-col justify-between space-y-4 text-right">
            {/* Times Column */}
            <span className="text-white text-lg font-normal leading-normal">1-7 PM</span>
            <span className="text-white text-lg font-normal leading-normal">Closed</span>
            <span className="text-white text-lg font-normal leading-normal">Closed</span>
            <span className="text-white text-lg font-normal leading-normal">Closed</span>
            <span className="text-white text-lg font-normal leading-normal">1-6 PM</span>
            <span className="text-white text-lg font-normal leading-normal">Closed</span>
            <span className="text-white text-lg font-normal leading-normal">Closed</span>
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
          <span className="text-white text-base sm:text-lg font-normal leading-normal">Thursday</span>
          <span className="text-white text-base sm:text-lg font-normal leading-normal">Friday</span>
          <span className="text-white text-base sm:text-lg font-normal leading-normal">Saturday</span>
          <span className="text-white text-base sm:text-lg font-normal leading-normal">Sunday</span>
          <span className="text-white text-base sm:text-lg font-normal leading-normal">Monday</span>
          <span className="text-white text-base sm:text-lg font-normal leading-normal">Tuesday</span>
          <span className="text-white text-base sm:text-lg font-normal leading-normal">Wednesday</span>
        </div>
        <div className="flex flex-col justify-around space-y-2 sm:space-y-3 lg:space-y-4 text-center">
          {/* Times Column */}
          <span className="text-white text-base sm:text-lg font-normal leading-normal">1-7 PM</span>
          <span className="text-white text-base sm:text-lg font-normal leading-normal">Closed</span>
          <span className="text-white text-base sm:text-lg font-normal leading-normal">Closed</span>
          <span className="text-white text-base sm:text-lg font-normal leading-normal">Closed</span>
          <span className="text-white text-base sm:text-lg font-normal leading-normal">1-6 PM</span>
          <span className="text-white text-base sm:text-lg font-normal leading-normal">Closed</span>
          <span className="text-white text-base sm:text-lg font-normal leading-normal">Closed</span>
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
