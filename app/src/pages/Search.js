// Components
import Menu from "../components/Menu";

// Icons
import { FiSearch } from "react-icons/fi";

const SearchPage = () => {
    return (  
        <div className="bg-landrupPurple h-screen w-screen pt-24">
            <h1 className="text-white font-lg text-4xl px-8 pt-8 fixed z-50 top-0 bg-landrupPurple w-full">Søg</h1>
            <div className="px-8">
                <input className="bg-slate-400 p-2 pr-10 w-full opacity-60 outline-none" type="text" placeholder="" />
                <FiSearch className="text-white w-6 h-6 relative left-80 -translate-y-8"/>
            </div>
            <div>
                <Menu/>
            </div>
        </div>
    );
}
 
export default SearchPage;