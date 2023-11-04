import { Outlet } from "react-router-dom";
import Navmenu from "../Shared/Navmenu/Navmenu";
import Footer from "../Shared/Navmenu/Footer/Footer";


const Main = () => {
	return (
		<div >
		<Navmenu></Navmenu>
			<Outlet></Outlet>
			<Footer></Footer>
		</div>
	);
};

export default Main;
