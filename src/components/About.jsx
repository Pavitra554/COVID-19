import "../style/About.css";
import { SiReact } from "react-icons/si";
const About = () => {
  return (
    <>
      <div className="mainAboutSection">
        <h1>About</h1>
        <p>
          Hope you checked the data about Coronavirus status in our Country
          (India) and in the World as well.
          <br />
          Still, Remember I'm not providing the official government data, The
          data is coming from the free{" "}
          <a
            href="https://www.ibm.com/cloud/learn/api"
            target="_blank"
            rel="noreferrer"
          >
            API
          </a>{" "}
          sources.
          <br />I have created this Web App for learning purposes only.
        </p>
      </div>
      <div className="apilinks">
            Used API
            <ul>
                <li> <a href="https://covid-19.dataflowkit.com/v1" target='_blank'rel="noreferrer" >https://covid-19.dataflowkit.com/v1</a></li>
                <li><a href="https://api.rootnet.in/covid19-in/stats/latest" target='_blank'rel="noreferrer" >https://api.rootnet.in/covid19-in/stats/latest</a></li>
            </ul>
        </div>
        <div className="made">
            Made with <SiReact color='#61dafb' size='1.8rem' className='ReactIcon'/> <a href="https://reactjs.org/" target='_blank'rel="noreferrer">React</a>
        </div>

    </>
  );
};

export default About;
