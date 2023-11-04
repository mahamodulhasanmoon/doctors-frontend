import { MdOutlineCall } from "react-icons/md";
import "./Footer.css";
import { TbCurrentLocation } from "react-icons/tb";
import logo from "../../../../public/logo.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <footer className=" h-[55rem] lg:h-[33rem] mx-auto w-full max-w-screen footer-with-background">
<div className="container mx-auto">
<div className="mx-auto  px-4 pb-6 pt-16 sm:px-6 lg:px-8 lg:pt-24">
          <div className="grid grid-cols-12  lg:gap-8 items-center lg:items-start">
            <div className="col-span-6 lg:-mt-4 lg:col-span-4 ">
              <div>

                <div>
                  <ul className="mt-2 space-y-4 text-sm">
                    <li>
                      <a
                        className="flex items-start justify-start text-black text-md transition hover:text-black/75"
                        href=""
                      >
                        <img src={logo}></img>
                      </a>
                    </li>
                    <li>
                      <a
                        className="flex items-start justify-start font-semibold lg:font-medium text-black text-[1rem] transition hover:text-black/75"
                        href=""
                      >
                        <MdOutlineCall className="w-8 h-8 mr-4 "></MdOutlineCall>{" "}
                        +1 714843-4900
                      </a>
                    </li>

                    <li>
                      <a
                        className="flex items-start justify-start font-semibold lg:font-medium text-black text-[1rem] transition hover:text-black/75"
                        href="/"
                      >
                        <TbCurrentLocation className="w-8 h-8 mr-4 "></TbCurrentLocation>{" "}
                        P2F9+8G Westminster, California, <br></br>USA
                      </a>
                    </li>
                  </ul>
                </div>
                <ul className="mt-8 lg:ml-0 -ml-18 flex justify-center gap-6 sm:justify-start md:gap-8">
                  <li>
                    <a
                      href="/"
                      rel="noreferrer"
                      target="_blank"
                      className="text-blue-700 transition hover:text-teal-700/75"
                    >
                      <span className="sr-only">Facebook</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="31"
                        viewBox="0 0 30 31"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_214_1932)">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M28.344 0.109375H1.656C0.741 0.109375 0 0.850375 0 1.76537V28.4534C0 29.3684 0.741 30.1094 1.656 30.1094H16.023V18.4919H12.114V13.9649H16.023V10.6244C16.023 6.74837 18.39 4.63937 21.8475 4.63937C23.5035 4.63937 24.9255 4.76237 25.341 4.81787V8.86788H22.944C21.063 8.86788 20.7 9.76188 20.7 11.0729V13.9634H25.1835L24.5985 18.4904H20.6985V30.1094H28.344C29.259 30.1094 30 29.3684 30 28.4534V1.76537C30 0.850375 29.259 0.109375 28.344 0.109375Z"
                            fill="#1877F2"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_214_1932">
                            <rect
                              width="30"
                              height="30"
                              fill="white"
                              transform="translate(0 0.109375)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                  </li>

                  <li>
                    <a
                      href="/"
                      rel="noreferrer"
                      target="_blank"
                      className="text-teal-700 transition hover:text-teal-700/75"
                    >
                      <span className="sr-only">Instagram</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_214_1934)">
                          <path
                            d="M22.9688 0H7.03125C3.148 0 0 3.148 0 7.03125V22.9688C0 26.852 3.148 30 7.03125 30H22.9688C26.852 30 30 26.852 30 22.9688V7.03125C30 3.148 26.852 0 22.9688 0Z"
                            fill="url(#paint0_radial_214_1934)"
                          />
                          <path
                            d="M22.9688 0H7.03125C3.148 0 0 3.148 0 7.03125V22.9688C0 26.852 3.148 30 7.03125 30H22.9688C26.852 30 30 26.852 30 22.9688V7.03125C30 3.148 26.852 0 22.9688 0Z"
                            fill="url(#paint1_radial_214_1934)"
                          />
                          <path
                            d="M15.0011 3.28125C11.8185 3.28125 11.419 3.2952 10.1691 3.35203C8.92148 3.40922 8.06988 3.60668 7.3248 3.89648C6.55395 4.19578 5.90016 4.59621 5.24883 5.24777C4.59691 5.89922 4.19648 6.55301 3.89625 7.32352C3.60563 8.06883 3.40793 8.92078 3.3518 10.1678C3.2959 11.4178 3.28125 11.8174 3.28125 15.0001C3.28125 18.1828 3.29531 18.581 3.35203 19.8309C3.40945 21.0785 3.60691 21.9301 3.89648 22.6752C4.19602 23.4461 4.59645 24.0998 5.24801 24.7512C5.89922 25.4031 6.55301 25.8045 7.32328 26.1038C8.06895 26.3936 8.92066 26.591 10.168 26.6482C11.418 26.705 11.8172 26.719 14.9996 26.719C18.1826 26.719 18.5808 26.705 19.8307 26.6482C21.0783 26.591 21.9308 26.3936 22.6765 26.1038C23.447 25.8045 24.0998 25.4031 24.7509 24.7512C25.4029 24.0998 25.8032 23.4461 26.1035 22.6755C26.3916 21.9301 26.5894 21.0783 26.648 19.8312C26.7041 18.5812 26.7188 18.1828 26.7188 15.0001C26.7188 11.8174 26.7041 11.418 26.648 10.168C26.5894 8.92043 26.3916 8.06895 26.1035 7.32387C25.8032 6.55301 25.4029 5.89922 24.7509 5.24777C24.0991 4.59598 23.4472 4.19555 22.6758 3.8966C21.9287 3.60668 21.0766 3.4091 19.8291 3.35203C18.579 3.2952 18.1811 3.28125 14.9974 3.28125H15.0011ZM13.9498 5.39309C14.2618 5.39262 14.61 5.39309 15.0011 5.39309C18.1301 5.39309 18.5009 5.40434 19.7365 5.46047C20.8791 5.51273 21.4992 5.70363 21.9123 5.86406C22.4592 6.07641 22.8491 6.33035 23.259 6.74063C23.6692 7.15078 23.923 7.54137 24.1359 8.08828C24.2964 8.50078 24.4875 9.12094 24.5395 10.2635C24.5957 11.4989 24.6079 11.8699 24.6079 14.9974C24.6079 18.1249 24.5957 18.4961 24.5395 19.7313C24.4873 20.8739 24.2964 21.4941 24.1359 21.9067C23.9236 22.4536 23.6692 22.843 23.259 23.2529C22.8489 23.6631 22.4595 23.9169 21.9123 24.1294C21.4997 24.2905 20.8791 24.4809 19.7365 24.5332C18.5011 24.5893 18.1301 24.6015 15.0011 24.6015C11.8719 24.6015 11.501 24.5893 10.2657 24.5332C9.12316 24.4805 8.50301 24.2896 8.08957 24.1291C7.54277 23.9167 7.15207 23.6629 6.74191 23.2527C6.33176 22.8425 6.07793 22.4529 5.865 21.9057C5.70457 21.4931 5.51344 20.873 5.46141 19.7304C5.40527 18.495 5.39402 18.124 5.39402 14.9945C5.39402 11.8651 5.40527 11.496 5.46141 10.2606C5.51367 9.11801 5.70457 8.49785 5.865 8.08477C6.07746 7.53785 6.33176 7.14727 6.74203 6.73711C7.15219 6.32695 7.54277 6.07301 8.08969 5.8602C8.50277 5.69906 9.12316 5.50863 10.2657 5.45613C11.3468 5.40727 11.7657 5.39262 13.9498 5.39016V5.39309ZM21.2565 7.33887C20.4802 7.33887 19.8503 7.96816 19.8503 8.74465C19.8503 9.52102 20.4802 10.1509 21.2565 10.1509C22.0329 10.1509 22.6628 9.52102 22.6628 8.74465C22.6628 7.96828 22.0329 7.3384 21.2565 7.3384V7.33887ZM15.0011 8.98195C11.6776 8.98195 8.98301 11.6766 8.98301 15.0001C8.98301 18.3237 11.6776 21.017 15.0011 21.017C18.3246 21.017 21.0183 18.3237 21.0183 15.0001C21.0183 11.6767 18.3244 8.98195 15.0008 8.98195H15.0011ZM15.0011 11.0938C17.1584 11.0938 18.9074 12.8426 18.9074 15.0001C18.9074 17.1574 17.1584 18.9064 15.0011 18.9064C12.8436 18.9064 11.0948 17.1574 11.0948 15.0001C11.0948 12.8426 12.8436 11.0938 15.0011 11.0938Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <radialGradient
                            id="paint0_radial_214_1934"
                            cx="0"
                            cy="0"
                            r="1"
                            gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(7.96875 32.3106) rotate(-90) scale(29.7322 27.6533)"
                          >
                            <stop stopColor="#FFDD55" />
                            <stop offset="0.1" stopColor="#FFDD55" />
                            <stop offset="0.5" stopColor="#FF543E" />
                            <stop offset="1" stopColor="#C837AB" />
                          </radialGradient>
                          <radialGradient
                            id="paint1_radial_214_1934"
                            cx="0"
                            cy="0"
                            r="1"
                            gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(-5.02512 2.16105) rotate(78.681) scale(13.2905 54.7837)"
                          >
                            <stop stopColor="#3771C8" />
                            <stop offset="0.128" stopColor="#3771C8" />
                            <stop
                              offset="1"
                              stopColor="#6600FF"
                              stopOpacity="0"
                            />
                          </radialGradient>
                          <clipPath id="clip0_214_1934">
                            <rect width="30" height="30" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                  </li>

                  <li>
                    <a
                      href="/"
                      rel="noreferrer"
                      target="_blank"
                      className="text-teal-700 transition hover:text-teal-700/75"
                    >
                      <span className="sr-only">Twitter</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_214_1939)">
                          <path
                            d="M22.9688 0H7.03125C3.148 0 0 3.148 0 7.03125V22.9688C0 26.852 3.148 30 7.03125 30H22.9688C26.852 30 30 26.852 30 22.9688V7.03125C30 3.148 26.852 0 22.9688 0Z"
                            fill="white"
                          />
                          <path
                            d="M22.9688 0H7.03125C3.148 0 0 3.148 0 7.03125V22.9688C0 26.852 3.148 30 7.03125 30H22.9688C26.852 30 30 26.852 30 22.9688V7.03125C30 3.148 26.852 0 22.9688 0Z"
                            fill="#1D9BF0"
                          />
                          <path
                            d="M23.3873 10.7122C23.4002 10.8982 23.4002 11.0842 23.4002 11.2719C23.4002 16.9903 19.047 23.5854 11.0868 23.5854V23.5819C8.73518 23.5853 6.43231 22.9118 4.45312 21.6418C4.79508 21.683 5.13867 21.7035 5.4832 21.7043C7.43222 21.7058 9.32517 21.0521 10.8579 19.8482C9.95484 19.8311 9.0797 19.5322 8.35481 18.9934C7.62993 18.4546 7.09154 17.7027 6.81492 16.8429C7.46329 16.9679 8.13171 16.9424 8.76867 16.7684C6.74977 16.3604 5.29723 14.5866 5.29723 12.5264V12.4716C5.89909 12.8068 6.57267 12.9925 7.26129 13.0132C5.3598 11.7423 4.77363 9.21257 5.92184 7.23468C7.00832 8.57167 8.3639 9.66515 9.90053 10.4441C11.4372 11.223 13.1205 11.67 14.8411 11.756C14.6695 11.0175 14.6949 10.247 14.9146 9.52137C15.1343 8.79576 15.5406 8.14056 16.093 7.62128C17.8361 5.98277 20.5774 6.06679 22.2159 7.8089C23.1851 7.61756 24.1145 7.26227 24.9641 6.75832C24.641 7.76034 23.965 8.6109 23.0617 9.15175C23.9196 9.05068 24.7574 8.82104 25.5469 8.47054C24.9661 9.3403 24.2348 10.0993 23.3873 10.7122Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_214_1939">
                            <rect width="30" height="30" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-span-6 lg:col-span-2 ">
              <div className="text-center sm:text-left">
                <p className="text-lg  font-bold lg:font-medium text-gray-900">Our Services</p>

                <ul className="mt-8 space-y-4 text-sm">
                  <li>
                    <a
                      className="text-black font-semibold lg:font-medium text-md transition hover:text-black/75"
                      href="/"
                    >
                      Chiropractic care
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-black font-semibold lg:font-medium text-md transition hover:text-black/75"
                      href="/"
                    >
                      Spinal Decompression
                    </a>
                  </li>


                </ul>
              </div>
            </div>
            <div className="col-span-6 lg:ml-0 -ml-36 md:ml-2 lg:col-span-2">
              <div className="text-center sm:text-left">
                <p className="text-lg lg:ml-0 md:ml-2 ml-8 font-bold lg:font-medium text-gray-900">
                  Useful Link
                </p>

                <ul className="mt-8 space-y-4 text-sm">
                  <li>
                    <a
                      className="text-black text-md font-bold lg:font-medium transition hover:text-black/75"
                      href="/"
                    >
                      Dr. Phil
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-black font-bold lg:font-medium text-md transition hover:text-black/75"
                      href="/"
                    >
                      About us
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-black font-bold lg:font-medium text-md transition hover:text-black/75"
                      href="/"
                    >
                      contact us
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-black font-bold lg:font-medium text-md transition hover:text-black/75"
                      href="/"
                    >
                      FAQ
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-span-6   lg:col-span-4">
              <div className="text-center sm:text-left">
                <p className="text-lg text-center pb-8 font-bold lg:font-medium text-gray-900">
                  Working Hour
                </p>

                <div>
                    <ul className=" font-sans font-bold lg:font-normal text-black text-md lg:text-lg mr-12   leading-7">
                      <li className="flex items-center justify-around space-x-24">
                        <a href="#">Thursday</a> <a href="#">1-7pm</a>
                      </li>
                      <li className="flex items-center justify-around space-x-24">
                        <a href="#">Friday</a> <a href="#">Closed</a>
                      </li>
                      <li className="flex items-center justify-around space-x-24">
                        <a href="#">Saturday</a> <a href="#">Closed</a>
                      </li>
                      <li className="flex items-center justify-around space-x-24">
                        <a href="#">Sunday</a> <a href="#">Closed</a>
                      </li>
                      <li className="flex items-center justify-around space-x-24">
                        <a href="#">Monday</a> <a href="#">1-6 PM</a>
                      </li>
                      <li className="flex items-center justify-around space-x-24">
                        <a href="#">Tuesday</a> <a href="#">Closed</a>
                      </li>
                      <li className="flex items-center justify-around  mr-3 space-x-24">
                        <a href="#">Wednesday</a> <a href="#">Closed</a>
                      </li>
                    </ul>
                  </div>
              </div>
            </div>

          </div>


          <div className="lg:mt-32 mt-24 text-black text-center flex justify-between items-center">
      <div className="flex justify-start">
        <Link to="/terms" className="text-black hover:underline">
          Terms & Condition
        </Link>
        <Link to="/policy" className="text-black hover:underline ml-4">
          Privacy policy
        </Link>
      </div>
      <p className="text-black">
        Copyright 2023. All Rights Reserved Dr. Phil Chiropractor
      </p>
    </div>
        </div>
</div>
      </footer>
    </div>
  );
};

export default Footer;