import React from "react";
import "./Home.css";
import Flip from "react-reveal/Flip";
import reza from "../../images/reza.png";
import Nav from "../nav/Nav";

const Home = () => {
  return (
    <div className="main">
      <Nav />
      <div className="mainLeft">
        <h1 className="reza">
          <Flip cascade delay="1000" duration="2000">
            REZA HAJIPOUR
          </Flip>
        </h1>
      </div>
      <div className="mainRight"></div>
    </div>
  );
};

export default Home;
