import "../style/StateData.css";
import { useState, useEffect } from "react";
import Errorpage from "./Errorpage";
import Loader from "./Loader";
const StateData = () => {


  const [data, setdata] = useState([]);
  const [error, seterror] = useState(false);
  const [pending,setpending] = useState(true);
  const getStateData = async () => {
    try {
      // const res = await fetch("https://data.covid19india.org/data.json");
      const res = await fetch('https://api.rootnet.in/covid19-in/stats/latest');
      const statewiseData = await res.json();
      setdata(statewiseData.data["regional"]);
      setpending(false);
      console.log(data);
    } catch (Error) {
      console.log(Error);
      seterror(true);
      setpending(false)
    }
  };
  useEffect(() => {
    getStateData();
  },[null]);
  return (
    <>
    {error && <> <Errorpage/></>}
    {pending && <><Loader/></> }
      <div className="IndiaStatemain">
        <div className="top-head">
          <div className="dot"></div>
          <h1>INDIA</h1>
        </div>
        <table>
          <thead>
            <tr>
              <th>State</th>
              <th>Confirmed</th>
              <th>Recovered</th>
              <th>Deceased</th>
            </tr>
          </thead>
          <tbody>
            {data.map((value,ind) => {
                return (
                    <tr key={ind}>
                    <td className="T_State">{value.loc}</td>
                    <td className="T_Confirmed">{value.totalConfirmed}</td>
                    <td className="T_Recovered">{value.discharged}</td>
                    <td className="T_Deceased">{value.deaths}</td>
                </tr>
                );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default StateData;
