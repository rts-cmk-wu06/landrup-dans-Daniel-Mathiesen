// Components
import Menu from "../components/Menu";
import CalenderCard from "../components/CalenderCard";

const CalenderPage = () => {
    return (  
        <div className="bg-landrupPurple h-screen w-screen pt-24">
            <h1 className="text-white font-lg text-4xl px-8 pt-8 fixed z-50 top-0 bg-landrupPurple w-full">Kalender</h1>
            <CalenderCard/>
            <div>
                <Menu/>
            </div>
        </div>
    );
}
 
export default CalenderPage;