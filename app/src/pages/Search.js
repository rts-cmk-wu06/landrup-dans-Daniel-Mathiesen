import { useState, useEffect } from "react";

// Components
import Menu from "../components/Menu";
import { getActivities } from "../data/axiosSearch";
import SearchBar from "../components/SearchBar";
import SearchList from "../pages/List"

const SearchPage = () => {

    const [activities, setActivities] = useState([])
    const [searchResults, setSearchResults] = useState([])

    useEffect(() => {
        getActivities().then(json => { 
         setActivities(json)   
         return json
        }).then(json =>{
           setSearchResults(json) 
        })
    }, [])

    return (  
            <div className="bg-landrupPurple h-full w-screen pt-28 pb-28">
                <h1 className="text-white font-lg text-4xl px-8 pt-8 pb-10 fixed z-50 top-0 bg-landrupPurple w-full">Søg</h1>
                <SearchBar activities={activities} setSearchResults={setSearchResults}/>
                <SearchList searchResults={searchResults} />
                <div>
                    <Menu/> 
                </div>
            </div>
    );
}
 
export default SearchPage;