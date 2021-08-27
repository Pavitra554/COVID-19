import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "../src/style/App.css";
import Nav from "../src/components/Nav";
import IndiaDash from "./components/IndiaDash";
import WorldDash from "./components/WorldDash";
import { AiOutlineCopyright } from "react-icons/ai";
import Errorpage from "./components/Errorpage";
import Developer from "./components/Developer";
import StateData from "./components/StateData";
import About from "./components/About";
function App() {
  return (
    <Router>
      <div className="App">
        
        <div className="navbar">
          <Nav />
        </div>
        <Switch>
          <Route exact path="/">
            <div className="homeDash">
              <WorldDash />
              <IndiaDash />
            </div>
          </Route>
          <Route exact path="/Developer">
            <div className="homeDash">
              <Developer/>
            </div>
          </Route>
          <Route exact path="/StateData">
            <div className="homeDash">
              <StateData/>
            </div>
          </Route>
          <Route exact path="/About">
            <div className="homeDash">
              <About/>
            </div>
          </Route>
          <Route path='*'>
            <Errorpage/>
          </Route>
        </Switch>
        <footer className="copy">
          <AiOutlineCopyright />
          COVID-19 2021
        </footer>
      </div>
    </Router>
  );
}

export default App;
