import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";

// Components
import Menu from "../components/Menu";

const ActivityParticipantsDetailPage = () => {
  const { classId } = useParams();
  const [activity, setActivity] = useState([]);

  useEffect(() => {
    Axios.get(`http://localhost:4000/api/v1/activities/${classId}`).then(
      (res) => {
        console.log(res.data);
        setActivity(res.data);
      }
    );
  }, []);

  useEffect(() => {
    console.log(activity);
  }, [activity, setActivity]);

  // console.log(activity.users[0]);

  return (
    <div className="bg-landrupPurple h-screen w-screen pt-24">
      {activity.users &&
        activity.users.map((user) => {
          // console.log(user.lastname);
          return (
            <>
              <h1 className="text-white font-lg text-4xl px-8 pt-8 fixed z-50 top-0 bg-landrupPurple w-full">
                {activity.name}
              </h1>
              <h2 className="text-white px-8">
                {user.firstname} {user.lastname}
              </h2>
            </>
          );
        })}
      <div>
        <Menu />
      </div>
    </div>
  );
};

export default ActivityParticipantsDetailPage;
