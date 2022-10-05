import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";

// Components
import Menu from "../components/Menu";


const DetailPage = () => {
    
    const { classId } = useParams();
    const [Class, SetClass] = useState([]);
  
    useEffect(() => {
      Axios.get(`http://localhost:4000/api/v1/activities/${classId}`).then((res) => {
        console.log(res.data);
        SetClass(res.data);
      });
    }, []);
    
    return (  
        <div className="detail_main__wrapper bg-landrupPurple h-screen">
        <div
          className="class_image w-screen bg-cover bg-no-repeat bg-center h-[32rem]"
          style={{
            backgroundImage: `url(${
              Class.asset ? Class.asset.url : "https://via.placeholder.com/500"
            })`,
          }}
        >
          <div className="wrapper_details px-5">
            <header className="flex items-center justify-between py-5 text-3xl">
              <div className="header_text__wrapper flex gap-4">
              </div>
            </header>
            <div className="class_ratingTitle__wrapper translate-y-[21.5rem]">
              <div className="flex items-center justify-end pt-10">
                <button
                  className="bg-landrupPurple text-white text-lg py-5 px-28 rounded-xl"
                >
                  Tilmeld
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="class_info__wrapper mt-5 px-5 text-white">
          <h1 className="font-medium text-2xl">{Class.name}</h1>
          <h2 className="text-xl">
            {Class.minAge + " - " + Class.maxAge} år
          </h2>
          <p className="mt-5 font-bold text-lg">{Class.description}</p>
        </div>
        <div>
            <Menu/>
        </div>
      </div>
    );
}
 
export default DetailPage;