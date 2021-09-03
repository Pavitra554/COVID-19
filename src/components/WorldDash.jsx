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
      const res = await fetch("https://disease.sh/v3/covid-19/all");
      const worlddata = await res.json();
      setdata(worlddata);
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
            <h1>WORLD
              {/* <h3 className="time">Last Updated on </h3> */}
              </h1>
          </div>
          <div className="dashboard">
            <div className="databoxes Confirmed">
              {" "}
              Confirmed
              <div className="data">{data.cases}</div>
              <div className="increase">+{data.todayCases}</div>
            </div>
            <div className="databoxes Active">
              Active
              <div className="data">{data.active}</div>
            </div>
            <div className="databoxes Recovered">
              Recovered
              <div className="data">{data.recovered}</div>
              <div className="increase">+{data.todayRecovered}</div>
            </div>
            <div className="databoxes Deceased">
              Deceased
              <div className="data">{data.deaths}</div>
              <div className="increase">+{data.todayDeaths}</div>
            </div>
          </div>
        </>
      )}

    </>
  );
};

export default WorldDash;
