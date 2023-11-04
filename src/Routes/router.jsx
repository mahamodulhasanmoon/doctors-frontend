import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import NotFound from "../Pages/NotFound/NotFound";
import HomePage from "../Pages/HomePage/HomePage";
import BookAppointment from "../Pages/HomePage/BookAppointment/BookAppointment";
import TalkingPage from "../Pages/TalkingPage/TalkingPage";
import PolicyPage from "../Pages/PolicyPage/PolicyPage";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Care from "../Pages/Care/Care";
import Spinal from "../Pages/Spinal/spinal";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Service from "../Pages/Service/Service";


const router = createBrowserRouter([
	{
		path: "/",
		element: <Main></Main>,
		errorElement: <NotFound></NotFound>,
		children: [
			{
				path: "/",
				element: <HomePage></HomePage>,
			},{
				path: "/book",
				element: <BookAppointment></BookAppointment>,
			},
			
			{
				path: "/doctor",
				element: <TalkingPage></TalkingPage>,
			},
			{
				path: "/about",
				element: <AboutUs></AboutUs>  ,
			},
			{
				path: "/policy",
				element: <PolicyPage></PolicyPage>,
			},
			{
				path: "/contact",
				element: <ContactUs></ContactUs>,
			},
			
			{
				path: "/care",
				element: <Care></Care>,
			},
	
			
			{
				path: "/spinal",
				element: <Spinal></Spinal>  ,
			},
			{
				path: "/service",
				element: <Service></Service>   ,
			},
			
			
		],
	},
	
	
	
]);
export default router;
