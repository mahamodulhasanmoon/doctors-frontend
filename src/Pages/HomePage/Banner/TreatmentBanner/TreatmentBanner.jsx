import trt1 from '../../../../assets/banner/trt1.png';
import trt2 from '../../../../assets/banner/trt2.png';
import trt3 from '../../../../assets/banner/trt3.png';

const TreatmentBanner = () => {
    return (  
        <div className="mx-auto w-full max-w-screen-2xl mt-10 sm:mt-16 md:mt-[198px] mb-10 sm:mb-16 md:mb-[126px]">
            <div className="rounded-lg mx-auto">
                <div className=" lg:mx-36   grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mt-5 sm:mt-10 md:mt-14">

                <div className='relative'>
    <img className='w-full h-auto md:w-[638px] md:h-[426px] object-cover object-top' src={trt1} alt="" />
    <div className='absolute inset-0 bg-gray-900 opacity-50'></div> {/* Dark overlay */}
    <p className='absolute bottom-2 md:bottom-8 py-3 lg:px-3 px-16 text-3xl lg:text-[3.3] font-medium text-white text-center'>
        Back adjustment for car accident
    </p>
</div>

<div className='relative'>
    <img className='w-full h-auto md:w-[638px] md:h-[426px] object-cover object-top' src={trt2} alt="" />
    <div className='absolute inset-0 bg-gray-900 opacity-50'></div> {/* Dark overlay */}
    <p className='absolute bottom-2 md:bottom-8 py-3 lg:px-3 px-16 text-3xl lg:text-[3.3] font-medium text-white text-center'>
        Combined Ring Dinger Adjustment
    </p>
</div>

<div className='relative'>
    <img className='w-full h-auto md:w-[638px] md:h-[426px] object-cover object-top' src={trt3} alt="" />
    <div className='absolute inset-0 bg-gray-900 opacity-50'></div> {/* Dark overlay */}
    <p className='absolute mx-8 mb-4 bottom-2 md:bottom-8 py-3 lg:px-3 text-3xl lg:text-[3.3] font-medium text-white text-center'>
        Full Spine Adjustment
    </p>
</div>


                </div>
            </div>
        </div>
    );
};

export default TreatmentBanner;
