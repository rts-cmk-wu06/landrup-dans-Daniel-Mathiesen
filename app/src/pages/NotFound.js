import { Link } from "react-router-dom";

// Icons
import { BiSad } from "react-icons/bi"

const NotFoundPage = () => {
    return (  
      <div className="bg-landrupPurple h-screen w-screen flex justify-center items-center flex-col text-white">
           <BiSad className=" w-44 h-44"/> 
           <h1 className="text-6xl py-10">404</h1>
           <h1 className="text-lg pb-10">Siden kan ikke findes</h1>
           <Link to="/activities">
                <button className="bg-[#E1A1E9] p-4 px-20 rounded-xl opacity-90">Hjem</button>
           </Link>
      </div>
    );
}
 
export default NotFoundPage;