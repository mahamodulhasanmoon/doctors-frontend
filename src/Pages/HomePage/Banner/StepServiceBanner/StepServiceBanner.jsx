import calender from '../../../../assets/banner/calender.svg';
import payment from '../../../../assets/banner/payment.svg';
import enjoy from '../../../../assets/banner/enjoy.svg';
 
const StepServiceBanner = () => {
    return (
        <div className="mx-auto container mt-6 md:mt-16">
            <div className="w-full max-w-[1040px] mx-auto">
                <div className="w-full max-w-[612px] mx-auto">
                    <h1 className="text-center font-sans text-4xl lg:text-5xl md:text-[54px] text-neutral-800 font-semibold">
                        Simple Steps to Get Our Services
                    </h1>
                    <p className="w-full text-center mt-4 md:mt-6 text-gray-600 font-normal text-lg md:text-lg">
                        Accessing our services is a breeze. Just follow our straightforward process to embark on your journey toward improved health and well-being with ease.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mt-6 md:mt-10">
                    <div className='flex bg-[#1E6EA3] w-full md:w-[313px] h-[347px] md:h-[347px] rounded-lg text-white shadow-lg mb-4 md:mb-0'>
                        <div className='flex-1 flex flex-col items-center justify-center pt-4 md:pt-5 px-4 md:px-6 pb-6 md:pb-[59px]'>
                            <img className='w-20 h-20 md:w-24 md:h-24' src={calender} alt="" />
                            <h1 className=' text-2xl mt-2 md:mt-3 text-center font-semibold'>
                                1. Make Appointment
                            </h1>
                            <p className='mt-1 md:mt-2 text-lg md:text-lg font-normal text-center'>
                                Schedule your appointment today for a healthier, pain-free tomorrow.
                            </p>
                        </div>
                    </div>
                    <div className='flex bg-[#1E6EA3] w-full md:w-[313px] h-[347px] md:h-[347px] rounded-lg text-white shadow-lg mb-4 md:mb-0'>
                        <div className='flex-1 flex flex-col items-center justify-center pt-4 md:pt-5 px-4 md:px-6 pb-6 md:pb-[59px]'>
                            <img className='w-20 h-20 md:w-24 md:h-24' src={payment} alt="" />
                            <h1 className='text-2xl mt-2 md:mt-3 text-center font-semibold'>
                                2. Complete Payment
                            </h1>
                            <p className='mt-1 md:mt-2 text-lg md:text-lg font-normal text-center'>
                                Finalize your experience with a seamless payment process.
                            </p>
                        </div>
                    </div>
                    <div className='flex bg-[#1E6EA3] w-full md:w-[313px] h-[347px] md:h-[347px] rounded-lg text-white shadow-lg'>
                        <div className='flex-1 flex flex-col items-center justify-center pt-4 md:pt-5 px-4 md:px-6 pb-6 md:pb-[59px]'>
                            <img className='w-20 h-20 md:w-24 md:h-24' src={enjoy} alt="" />
                            <h1 className='text-2xl mt-2 md:mt-3 text-center font-semibold'>
                                3. Enjoy Your Therapy
                            </h1>
                            <p className='mt-1 md:mt-2 text-lg md:text-lg font-normal text-center'>
                                Step into a world of rejuvenation and well-being as you embark on your therapy journey.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StepServiceBanner;
