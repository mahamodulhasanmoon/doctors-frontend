
import bannerImage from '../../../../assets/banner/aboutBanner.png';
import people from '../../../../assets/banner/people.svg'
import exp from '../../../../assets/banner/exp.svg'
import service from '../../../../assets/banner/service-area.svg'
import staff from '../../../../assets/banner/staff.svg'

const AchievementBanner = () => {
    return (
        <div className="mx-auto w-full max-w-screen-2xl bg-[#1E6EA3] text-[#FFFFFF] h-auto md:h-[729px] mt-[181px] pb-12">
            <div className="mx-12 px-4  grid grid-cols-1 md:grid-cols-6 gap-4">
                <div className="col-span-4 items-center mt-8 md:mt-[140px]">
                    {/* This is the left part text */}
                    <h1 className="font-sans text-4xl lg:text-5xl text-center md:text-[54px] font-semibold">
                        Our achievement
                    </h1>
                    <p className="ml-14 lg:ml-16 font-normal self-start mt-8 font-sans text-md md:text-[18px] tracking-wide text-start sm:whitespace-normal">
                        Discover Our Success Stories. Witness the transformative power of chiropractic care through the journeys of those we have empowered to lead healthier, pain-free lives.
                    </p>

                    {/* This is the left part card */}
                    <div className="grid grid-cols-2 md:flex md:items-center md:justify-between mt-8">
                        <div className="w-full p-2 text-center">
                            <img className="mx-auto w-20 h-20" src={people} alt="" />
                            <h2 className="mt-2 font-semibold text-[45px]">1000+</h2>
                            <p className="mt-2 text-lg font-normal">Happy Patients</p>
                        </div>
                        <div className="w-full p-2 text-center">
                            <img className="mx-auto w-20 h-20" src={exp} alt="" />
                            <h2 className="mt-2 font-semibold text-[45px]">25</h2>
                            <p className="mt-2 text-lg font-normal">Experience</p>
                        </div>
                        <div className="w-full p-2 text-center">
                            <img className="mx-auto w-20 h-20" src={staff} alt="" />
                            <h2 className="mt-2 font-semibold text-[45px]">250+</h2>
                            <p className="mt-2 text-lg font-normal">Therapist & Staff</p>
                        </div>
                        <div className="w-full p-2 text-center">
                            <img className="mx-auto w-20 h-20" src={service} alt="" />
                            <h2 className="mt-2 font-semibold text-[45px]">7</h2>
                            <p className="mt-2 text-lg font-normal">Service Area</p>
                        </div>
                    </div>
                </div>

                {/* This is image */}
                <div className="col-span-2 ml-5 lg:ml-0 py-12 mt-8 md:mt-0">
                    <div>
                        <img className="w-full h-auto md:w-[502px] md:h-[621px] rounded-md object-cover" src={bannerImage} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AchievementBanner;
