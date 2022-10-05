import { Link } from "react-router-dom";

// Icons
import { FiHome } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";
import { FiCalendar } from "react-icons/fi";

const Footer = () => {
  return (
    <div className="menu_wrapper">
      <div className="w-full h-[66px] bottom-0 bg-white fixed z-50 flex items-center ">
        <div className="flex justify-evenly w-full gap-9">
          <div className="border-2 border-black text-2xl rounded-full w-10 h-10 pl-[1.5%] pt-1">
        <Link to="/activities">
            <FiHome />
        </Link>
          </div>
          <div className="border-2 border-black text-2xl rounded-full w-10 h-10 pl-[1.5%] pt-1">
        <Link to="/search">
            <FiSearch />
        </Link>  
          </div>
          <div className="border-2 border-black text-2xl rounded-full w-10 h-10 pl-[1.5%] pt-1">
        <Link to="/calender">
            <FiCalendar />
        </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;