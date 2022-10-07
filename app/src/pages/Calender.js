// Components
import Menu from "../components/Menu";
import CalenderCard from "../components/CalenderCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const CalenderPage = ({ token }) => {
  // console.log(token);
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/v1/users/5", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response.data.activities);
        setActivities(response.data.activities);
      });
  }, []);

  return (
    <div className="bg-landrupPurple h-screen w-screen pt-24">
      <h1 className="text-white font-lg text-4xl px-8 pt-8 fixed z-50 top-0 bg-landrupPurple w-full">
        Kalender
      </h1>
      {/* <CalenderCard /> */}
      {activities.map((activity) => {
        return (
          <div className="CalenderCard_wrapper px-10">
            <Link to={`/calender/participants/${activity.id}`}>
              <div key={activity.id}>
                <div className="bg-white w-full flex flex-col items-start rounded-lg p-5 mb-8">
                  <h1 className="text-3xl">{activity.name}</h1>
                  <h2 className="text-lg capitalize">
                    {activity.weekday} {activity.time}
                  </h2>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
      <div>
        <Menu />
      </div>
    </div>
  );
};

export default CalenderPage;
