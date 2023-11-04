import { MdOutlineCall } from "react-icons/md";
import logo from "../../../public/logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import {  IoIosArrowForward } from "react-icons/io";


const Navmenu = () => {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

 


  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <div className="bg-cyan-700 ">
      <div className="  h-20 container mx-auto py-12 border-b border-zinc-300 flex justify-between items-center">
        <img className="w-32 h-14" src={logo} alt="Logo" />

        {/* Mobile Menu Icon */}
        <div
          className="lg:hidden cursor-pointer"
          onClick={toggleMobileMenu}
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
        <Link to='/'  className="text-white text-lg font-normal font-['Open Sans'] cursor-pointer hover:underline">Home</Link>
          <div className="flex items-center gap-1">
          <div className="relative">
       

      <div className="relative"> {/* This relative position is the anchor for the absolute positioning of the dropdown */}
        {/* Services link which acts as a dropdown trigger */}
        <div onClick={toggleDropdown} className="flex items-center cursor-pointer">
          <span className="text-white text-lg font-normal font-['Open_Sans'] hover:underline">Services</span>
          {/* Dropdown Icon */}
          <div className="w-4 h-4 ml-1">
            {/* SVG icon here */}
          </div>
        </div>

        {/* Dropdown Content */}
        {isDropdownOpen && (
         <ul className="absolute left-0 mt-2 w-60 bg-white shadow-lg rounded-md overflow-hidden z-10">
         <li>
           <Link to='/care' className="flex items-center justify-between px-2 py-2 text-sm text-gray-700 hover:text-cyan-700 hover:font-bold">
             <span>Chiropractic care</span>
             <span className="flex items-center">
  <IoIosArrowForward className="mr-[-6px]"/>
  <IoIosArrowForward/>
</span>
           </Link>
         </li>
         <li>
           <Link to='/spinal' className="flex items-center justify-between px-2 py-2 text-sm text-gray-700 hover:text-cyan-700 hover:font-bold">
             <span>Spinal Decompression</span>
             <span className="flex items-center">
  <IoIosArrowForward className="mr-[-6px]"/>
  <IoIosArrowForward/>
</span>

           </Link>
         </li>
         {/* Add more list items as needed */}
       </ul>
       
       
        )}
      </div>
            </div>
          </div>
          <div className="flex items-center gap-1">
          <Link to='/service' className="text-white text-lg font-normal font-['Open Sans'] cursor-pointer hover:underline">Service Area</Link>
            <div className="w-4 h-4 relative">

            </div>
          </div>
          <Link to='/doctor' className="text-white text-lg font-normal font-['Open Sans'] cursor-pointer hover:underline">Dr. Phil</Link>
          <Link to='/about' className="text-white text-lg font-normal font-['Open Sans'] cursor-pointer hover:underline">About Us</Link>
          <Link to='/contact' className="text-white text-lg font-normal font-['Open Sans'] cursor-pointer hover:underline">Contact Us</Link>
        </nav>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute  top-20 left-0 right-0 bg-cyan-700">
            <div className="flex flex-col items-center gap-4 pb-3">
              {/* ... (your mobile navigation items) */}
              <div className="text-white text-lg font-normal font-['Open Sans'] cursor-pointer hover:underline">Home</div>
              <div className="flex items-center gap-1">
                <div className="text-white text-lg font-normal font-['Open Sans'] cursor-pointer hover:underline">Services</div>
                <div className="w-4 h-4 relative">

                </div>
              </div>
              <div className="flex items-center gap-1">
                <div className="text-white text-lg font-normal font-['Open Sans'] cursor-pointer hover:underline">Service Area</div>
                <div className="w-4 h-4 relative">

                </div>
              </div>
              <div className="text-white text-lg font-normal font-['Open Sans'] cursor-pointer hover:underline">Dr. Phil</div>
              <div className="text-white text-lg font-normal font-['Open Sans'] cursor-pointer hover:underline">About Us</div>
              <div className="text-white text-lg font-normal font-['Open Sans'] cursor-pointer hover:underline">Contact Us</div>
              <p className="flex items-center text-white lg:text-2xl  font-bold font-['Open Sans'] capitalize leading-[43.20px]">
            <MdOutlineCall className="text-bold lg:w-10 lg:h-10 lg:text-2xl " />
            +1 714843-4900
          </p>
            </div>
          </div>
        )}

        <div className="w-full hidden lg:flex lg:w-auto mt-4 lg:mt-0 px-4 py-2 rounded-lg text-center">
          <p className="flex items-center text-white lg:text-2xl  font-bold font-['Open Sans'] capitalize leading-[2.7rem]">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 39 39" fill="none">
  <g clipPath="url(#clip0_386_26)">
    <path d="M37.9386 28.6221L32.496 23.1795C30.5522 21.2357 27.2478 22.0133 26.4703 24.5401C25.8872 26.2896 23.9434 27.2615 22.194 26.8727C18.3065 25.9008 13.0583 20.847 12.0864 16.765C11.5033 15.0156 12.6695 13.0718 14.4189 12.4887C16.9458 11.7112 17.7233 8.40682 15.7796 6.46305L10.337 1.02048C8.78198 -0.34016 6.44946 -0.34016 5.08882 1.02048L1.39565 4.71365C-2.29752 8.6012 1.7844 18.9032 10.9201 28.0389C20.0559 37.1747 30.3579 41.4511 34.2454 37.5634L37.9386 33.8703C39.2993 32.3152 39.2993 29.9827 37.9386 28.6221Z" fill="white"/>
  </g>
  <defs>
    <clipPath id="clip0_386_26">
      <rect width="39" height="39" fill="white"/>
    </clipPath>
  </defs>
</svg>  
            +1 714843-4900
          </p>
        </div>
      </div>
    

    </div>
  );
};

export default Navmenu;
