import React from "react";
import "./Home.css";
import Flip from "react-reveal/Flip";
import reza from "../../images/reza.png";
import Nav from "../nav/Nav";

const Home = () => {
  return (
    <div className="main">
      <Nav />
      <h1 className="reza">
        <Flip cascade delay="1000" duration="2500">
          REZA HAJIPOUR
        </Flip>
      </h1>
      <img className="hajipour" src={reza} />
    </div>
  );
};

export default Home;
