
import MeetDr from "../MeetDr/MeetDr";
import AchievementBanner from "./Banner/AchievementBanner/AchievementBanner";
import AddBanner from "./Banner/AddBanner/AddBanner";
import Banner from "./Banner/Banner";
import BookAppointmentBanner1 from "./Banner/BookAppointmentBanner/BookAppointmentBanner1";
import ConditionBanner from "./Banner/ConditionBanner/ConditionBanner";
import DemoBanner from "./Banner/DemoBanner/DemoBanner";
import ReviewBanner from "./Banner/ReviewBanner/ReviewBanner";
import StepServiceBanner from "./Banner/StepServiceBanner/StepServiceBanner";
import TreatmentBanner from "./Banner/treatmentBanner/TreatmentBanner";
import Faqs from "./Faqs/Faqs";



const HomePage = () => {
    return (
        <div  className="bg-white"  >


            <Banner></Banner>
            <AddBanner />
            <BookAppointmentBanner1 />
            <AchievementBanner />
            <TreatmentBanner />
            <StepServiceBanner />
            <ConditionBanner />
            <ReviewBanner />
            <DemoBanner />
            <MeetDr></MeetDr>
            <Faqs></Faqs>
           
        </div>
    );
};

export default HomePage;