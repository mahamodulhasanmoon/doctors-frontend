import img1 from '../../../../assets/banner/condition/1.svg';
import img2 from '../../../../assets/banner/condition/2.svg';
import img3 from '../../../../assets/banner/condition/3.svg';
import img4 from '../../../../assets/banner/condition/4.svg';
import img5 from '../../../../assets/banner/condition/5.svg';
import img6 from '../../../../assets/banner/condition/6.svg';
import img7 from '../../../../assets/banner/condition/7.svg';
import img8 from '../../../../assets/banner/condition/8.svg';
import img9 from '../../../../assets/banner/condition/9.svg';
import img10 from '../../../../assets/banner/condition/10.svg';
import img11 from '../../../../assets/banner/condition/11.svg';
import img12 from '../../../../assets/banner/condition/12.svg';
const ConditionBanner = () => {
    return (
        <div className=" mx-auto  mt-12 w-full max-w-screen-2xl">
          
                <div className=" mx-2">
                    <h1 className="text-center font-sans text-4xl lg:text-5xl  text-neutral-800 font-semibold">Chiropractic Condition We <br/> Can Handle 
                    </h1>
                    <p className=" text-center mt-8 font-normal text-lg">
                    Discover Our Expertise in Addressing Various Conditions. From back and neck pain <br></br> to sports injuries, our skilled chiropractors use proven techniques to guide<br></br> you towards a pain-free, vibrant life.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-3 items-center mt-16 ">
                    <div className='  py-16 rounded-lg '>
                        <div className='flex items-center flex-col '>
                            <img className='w-20 h-20' src={img1} alt="" />
                            <p className='mt-10 px-2 text-[27px] font-semibold text-center'>
                            Neck Adjustment
                            </p>
                        </div>
                    </div>
                    <div className='  py-16 rounded-lg '>
                        <div className='flex items-center flex-col '>
                            <img className='w-20 h-20' src={img2} alt="" />
                            <p className='mt-10 px-2 text-[27px] font-semibold text-center'>
                            Back Adjustment
                            </p>
                        </div>
                    </div>
                    <div className='  py-16 rounded-lg '>
                        <div className='flex items-center flex-col '>
                            <img className='w-20 h-20' src={img3} alt="" />
                            <p className='mt-10 px-2 text-[27px] font-semibold text-center'>
                            Jaw Adjustment
                            </p>
                        </div>
                    </div>
                    <div className='  py-16 rounded-lg '>
                        <div className='flex items-center flex-col '>
                            <img className='w-20 h-20' src={img4} alt="" />
                            <p className='mt-10 px-2 text-[27px] font-semibold text-center'>
                            Postural Support
                            </p>
                        </div>
                    </div>
                    <div className='  py-16 rounded-lg '>
                        <div className='flex items-center flex-col '>
                            <img className='w-20 h-20' src={img5} alt="" />
                            <p className='mt-10 px-2 text-[27px] font-semibold text-center'>
                            Headaches
                            </p>
                        </div>
                    </div>
                    <div className='  py-16 rounded-lg '>
                        <div className='flex items-center flex-col '>
                            <img className='w-20 h-20' src={img6} alt="" />
                            <p className='mt-10 px-2 text-[27px] font-semibold text-center'>
                            Migranes
                            </p>
                        </div>
                    </div>
                    <div className='  py-16 rounded-lg '>
                        <div className='flex items-center flex-col '>
                            <img className='w-20 h-20' src={img7} alt="" />
                            <p className='mt-10 px-2 text-[27px] font-semibold text-center'>
                            Garston technique
                            </p>
                        </div>
                    </div>
                    <div className='  py-16 rounded-lg '>
                        <div className='flex items-center flex-col '>
                            <img className='w-20 h-20' src={img8} alt="" />
                            <p className='mt-10 px-2 text-[27px] font-semibold text-center'>
                            Sciatica
                            </p>
                        </div>
                    </div>
                    <div className='  py-16 rounded-lg '>
                        <div className='flex items-center flex-col '>
                            <img className='w-20 h-20' src={img9} alt="" />
                            <p className='mt-10 px-2 text-[27px] font-semibold text-center'>
                            Message Therapy
                            </p>
                        </div>
                    </div>
                    
                    
                    
                </div>

         
            <div className="mt-[171px]">
                <div className="mx-2">
                <h1 className="text-center font-sans text-4xl lg:text-5xl  text-neutral-800 font-semibold">Spinal Decompression Condition We Can Handle  
                    </h1>
                    <p className=" text-center mt-8 font-normal text-lg">
                    Explore the conditions we can effectively address through Spinal Decompression.<br/> From herniated discs to chronic back pain, our expert team offers non-invasive <br/>solutions to improve your well-being.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-5 items-center mt-16 ">
                    <div className='  py-16 rounded-lg '>
                        <div className='flex items-center flex-col '>
                            <img className='w-20 h-20' src={img10} alt="" />
                            <p className='mt-10 px-2 text-[27px] font-semibold text-center'>
                            Disc Issues
                            </p>
                        </div>
                    </div>
                    <div className='  py-16 rounded-lg '>
                        <div className='flex items-center flex-col '>
                            <img className='w-20 h-20' src={img11} alt="" />
                            <p className='mt-10 px-2 text-[27px] font-semibold text-center'>
                            Spine Adjustment
                            </p>
                        </div>
                    </div>
                    <div className='  py-16 rounded-lg '>
                        <div className='flex items-center flex-col '>
                            <img className='w-20 h-20' src={img12} alt="" />
                            <p className='mt-10 px-2 text-[27px] font-semibold text-center'>
                            Scoliosis Adjustment
                            </p>
                        </div>
                    </div>
                   
                    
                    
                    
                </div>

            </div>

        </div>
    );
};

export default ConditionBanner;