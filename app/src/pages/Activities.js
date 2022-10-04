import ActivityCard from "../components/ActivityCard";

const ActivityPage = () => {
    return (  
        <div className="bg-landrupPurple h-full w-screen px-8 pt-8 pb-8">
            <h1 className="text-white font-lg text-4xl">Aktiviteter</h1>
            <ActivityCard/>
        </div>
    );
}
 
export default ActivityPage;