import React from "react";
import axios from "axios";

export default class ActivityCard extends React.Component {
    state = {
      classes: [],
    };

  // Get all classes 
  
  componentDidMount() {
    axios.get(`http://localhost:4000/api/v1/activities`).then((res) => {
      console.log(res.data);
      this.setState({ classes: res.data });
    });
  }

render() {
    return ( 
        <div className="CalenderCard_wrapper px-10">
            {this.state.classes.map((Class) => (
            <a href={`/calender/participants/${Class.name}/${Class.id}`}>
            <div key={Class.id}>
                <div className="bg-white w-full flex flex-col items-start rounded-lg p-5 mb-8">
                    <h1 className="text-3xl">{Class.name}</h1>
                    <h2 className="text-lg capitalize">{Class.weekday} {Class.time}</h2>
                </div>
            </div>
            </a>
          ))}
        </div>
    );
  }
}