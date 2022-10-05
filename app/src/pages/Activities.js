import ActivityCard from "../components/ActivityCard";
import Menu from "../components/Menu";

const ActivityPage = () => {
    return (  
        <div className="bg-landrupPurple h-full w-screen pt-8 pb-8">
            <h1 className="text-white font-lg text-4xl px-8">Aktiviteter</h1>
            <ActivityCard/>
            <div>
                <Menu/>
            </div>
        </div>
    );
}
 
export default ActivityPage;