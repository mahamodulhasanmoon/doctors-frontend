
import bannerImage from '../../../../assets/banner/aboutBanner.png';
import avatar from '../../../../assets/banner/avatar.png'
import tick from '../../../../assets/banner/tick.svg'

const AboutDoctorBanner = () => {
    return (
        <div
            className="bg-[#1E6EA3] text-[#FFFFFF] mx-auto w-full max-w-screen-2xl mt-[115px] pb-12 mb-[190px]"
        >
            <div className='w-[1340px] mx-auto grid grid-cols-6'>
                <div className='col-span-4  mt-[140px] mr-[122px]'>
                    <h1 className='font-sans text-[56px] font-semibold'>
                        Elevate your well-being with chiropractic expertise</h1>
                    <p className='font-normal mt-8 font-sans text-[18px] tracking-wide text-start'>
                        Discover the transformative power of chiropractic care at our clinic. Our skilled chiropractors are dedicated to enhancing your well-being through tailored treatments that address a wide range of musculoskeletal issues. With a focus on natural healing and pain relief, we offer personalized care that empowers you to regain control over your health and live life to the fullest. From reducing discomfort to improving mobility, our holistic approach helps you achieve optimal balance and vitality. Join us on the journey to a healthier, pain-free, and more vibrant life through the art of chiropractic care.
                    </p>
                    <div className='flex items-center mt-[42px]'>
                        <img className='w-24 h-24 rounded-full object-cover object-top' src={avatar} alt="" />
                        <div className='ml-[30px] text-[18px] font-normal '>
                            <h2>Dr. Phill,</h2>
                            <p>D.C. (Doctor of Chiropractic)</p>
                        </div>
                    </div>

                </div>

                <div className='col-span-2  pt-[90px]'>
                    <div>
                        <img className='w-[495px] h-[621px] rounded-md object-cover' src={bannerImage} alt="" />
                    </div>


                </div>
            </div>
            <div className='w-[1340px] mx-auto flex justify-between items-center'>
                

                <div className='mt-24'>
                    <h2 className='mb-16 text-[42px] font-semibold'>Discover Our Advantage</h2>
                    <div className='flex items-center mb-[32px]'>
                        <img className='w-[36px] h-[36px]' src={tick} alt="" />
                        <p className='ml-3 text-[32px] font-normal'>Back adjustment for car accident</p>
                    </div>
                    <div className='flex items-center mb-[32px]'>
                        <img className='w-[36px] h-[36px]' src={tick} alt="" />
                        <p className='ml-3 text-[32px] font-normal'>New Patient</p>
                    </div>
                    <div className='flex items-center mb-[32px]'>
                        <img className='w-[36px] h-[36px]' src={tick} alt="" />
                        <p className='ml-3 text-[32px] font-normal'>First Visit</p>
                    </div>
                </div>

                <div className='mt-[145px]'>
                    <div className='flex items-center mb-[32px]'>
                        <img className='w-[36px] h-[36px]' src={tick} alt="" />
                        <p className='ml-3 text-[32px] font-normal'>Combined Ring Dinger Adjustment</p>
                    </div>
                    <div className='flex items-center mb-[32px]'>
                        <img className='w-[36px] h-[36px]' src={tick} alt="" />
                        <p className='ml-3 text-[32px] font-normal'>Full Spine Adjustment</p>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default AboutDoctorBanner;