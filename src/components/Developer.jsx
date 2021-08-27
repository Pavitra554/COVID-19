import "../style/Developer.css";
import myPic from "../assets/me.jpg";
import Facebook from "../assets/Facebook.png";
import Instagram from "../assets/Instagram.png";
import GitHub from "../assets/GitHub.png";
import LinkedIn from "../assets/LinkedIn.png";
import Twitter from "../assets/Twitter.png";
import Hackerrank from "../assets/Hackerrank.png";
import Codechef from "../assets/Codechef.jpg";
const Developer = () => {
  return (
    <>
      <div className="mainpage">
        <div className="me">
          <div>
            <img className="myimg" src={myPic} alt="Loading..." />
          </div>
          <div className="content">
            <h1>Hey there! I'm Pavitra.</h1>
            <p>
              I'm an 18-year-old developer. Currently, I am purchasing B.Tech
              from
              <br />
              Siksha 'O' Anusandhan University (ITER) Bhubaneswar Odisha.
              <br />I love to Code and this web app is one of my projects made
              upon React.Js and I'm a competitive coder as well wanna know more
              about me check out below.
            </p>
          </div>
          <div className="socialLinks">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.facebook.com/pavitra.kumar.737001/"
            >
              <img src={Facebook} alt="Loading..." />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/pavitra.js/"
            >
              <img src={Instagram} alt="Loading..." />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/pavitra-behara-07941a200/"
            >
              <img src={LinkedIn} alt="Loading..." />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/Pavitra554"
            >
              <img src={GitHub} alt="Loading..." />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/behara_pavitra"
            >
              <img src={Twitter} alt="Loading..." />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.hackerrank.com/pavitra_Behara?hr_r=1"
            >
              <img src={Hackerrank} alt="Loading..." />
            </a>
            <a
              target="_blank"
              className="codechef"
              rel="noreferrer"
              href="https://www.codechef.com/users/pavitra_2003"
            >
              <img src={Codechef} alt="Loading..." />
            </a>
          </div>
          <p className="disclaimer">
            Please Don't Share The Developer Information
          </p>
        </div>
      </div>
    </>
  );
};

export default Developer;
