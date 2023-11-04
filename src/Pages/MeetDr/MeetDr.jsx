
import bannerImage from '../../assets/banner/aboutBanner.png';

const MeetDr = () => {
  return (
    <div className="bg-cyan-100 my-24 w-[600px] h-[800px] rounded-xl mx-auto">
      <div className="flex flex-col items-center justify-center h-full">
      <div className="text-center text-neutral-800 text-[44px] font-bold font-['Open Sans'] leading-[64.80px]">Meet with Dr. Phil</div>
        <div className="max-w-md mx-auto">
          <img src={bannerImage} alt="Dr. Phil" className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default MeetDr;
