import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";

// Components
import Menu from "../components/Menu";

const ActivityParticipantsDetailPage = () => {

    const { classId } = useParams();
    const [Class, SetClass] = useState([]);
  
    useEffect(() => {
      Axios.get(`http://localhost:4000/api/v1/activities/${classId}`).then((res) => {
        console.log(res.data);
        SetClass(res.data);
      });
    }, []);

    console.log(Class.users)

    return (  
        <div className="bg-landrupPurple h-screen w-screen pt-24">
          <h1 className="text-white font-lg text-4xl px-8 pt-8 fixed z-50 top-0 bg-landrupPurple w-full">{Class.name}</h1>
          <h2 className="text-white px-8">{Class.users[0].firstname} {Class.users[0].lastname}</h2>
          <h2 className="text-white px-8">{Class.users[1].firstname} {Class.users[1].lastname}</h2>
        <div>
            <Menu/>
        </div>
    </div>
    );
}
 
export default ActivityParticipantsDetailPage;