import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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
      <div className="px-8">
        {this.state.classes.map((Class) => (
          <Link to={`/activity/${Class.id}`}>
            <div
              key={Class.id}
              className="flex flex-col-reverse h-96 rounded-3xl mb-12)] bg-cover bg-center bg-no-repeat mt-10"
              style={{ backgroundImage: `url("${Class.asset.url}")` }}
            >
              <div className="bg-[#E1A1E9] flex flex-col justify-center items-start text-md font-bold px-3 h-[30%] w-full opacity-90 rounded-tr-[50px] rounded-bl-2xl">
                <p className="pb-2">{Class.name}</p>
                <p className="pb-2">
                  {Class.minAge}-{Class.maxAge} år
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    );
  }
}
