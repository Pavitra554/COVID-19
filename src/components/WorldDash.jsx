import Errorpage from "./Errorpage";
import { useEffect, useState } from "react";
import "../style/World_India_Dash.css";
import Loader from "./Loader";
const WorldDash = () => {

  const [data, setdata] = useState([]);
  const [error, seterror] = useState(false);
  const [view, setview] = useState(true);
  const [pending,setpending] = useState(true);

  const getWorldData = async () => {
    try {
      const res = await fetch("https://covid-19.dataflowkit.com/v1");
      const worlddata = await res.json();
      setdata(worlddata[0]);
      setpending(false);
     // console.log(data["Total Cases_text"]);
    } catch (error) {
      seterror(true);
      setview(false);
      setpending(false);
      console.log(error);
    }
  };

  useEffect(() => {
    // setTimeout(()=>{
      getWorldData();
    // },1000)
  }, []);

  return (
    <>
      {error && <> <Errorpage/></>}
      {pending && <><Loader/></> }
      {view && (
        <>
       
          <div className="top-head">
            <div className="dot"></div>
            <h1>WORLD<h3 className="time">Last Updated on {data["Last Update"]}</h3></h1>
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
        </>
      )}

    </>
  );
};

export default WorldDash;
