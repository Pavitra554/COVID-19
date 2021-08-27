import "../style/World_India_Dash.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const IndiaDash = () => {
  const [data, setData] = useState([]);

  const [view, setview] = useState(true);
  const GetCountryData = async () => {
    try {
      const res = await fetch("https://covid-19.dataflowkit.com/v1");
      const worlddata = await res.json();
      setData(worlddata[2]);
    } catch (error) {
        setview(false)
      console.log(error);
    }
  };

  useEffect(() => {
    GetCountryData();
  }, []);

  return (
    <>
      {view && (
        <>
          <div className="top-head">
            <div className="dot"></div>
            <h1>INDIA<h3 className="time">Last Updated on {data["Last Update"]}</h3></h1>
          </div>
          <div className="dashboard">
            <div className="databoxes Confirmed">
              {" "}
              Confirmed
              <div className="data">{data["Total Cases_text"]}</div>
              <div className="increase">{data["New Cases_text"]}</div>
            </div>
            <div className="databoxes Active">
              Active
              <div className="data">{data["Active Cases_text"]}</div>
            </div>
            <div className="databoxes Recovered">
              Recovered
              <div className="data">{data["Total Recovered_text"]}</div>
            </div>
            <div className="databoxes Deceased">
              Deceased
              <div className="data">{data["Total Deaths_text"]}</div>
              <div className="increase">{data["New Deaths_text"]}</div>
            </div>
          </div>
          <div className="btn">
          <Link to="/StateData">
            <button className="moredata">More Details</button>
          </Link>
          </div>
        </>
      )}
    </>
  );
};

export default IndiaDash;
