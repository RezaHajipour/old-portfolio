import React from "react";
import "./Home.css";
import Flip from "react-reveal/Flip";
import Fade from "react-reveal/Fade";
// import reza from "../../images/reza.png";
import Nav from "../nav/Nav";

const Home = () => {
  return (
    <div className="main">
      <Nav />
      <div className="mainLeft">
        <h1 className="reza">
          <Flip cascade delay="800" duration="2000">
            REZA HAJIPOUR
          </Flip>
          {/* <Flip cascade delay="2000" duration="2000">
            HAJIPOUR
          </Flip> */}
        </h1>
        <h1 className="reza2">WEB DEVELOPER</h1>
        <h1 className="reza3">FROM HAMBURG</h1>
      </div>
      <div className="mainRight"></div>
    </div>
  );
};

export default Home;
