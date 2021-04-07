import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import Nav from "./components/nav/Nav";
// import Footer from "./components/footer/Footer";
import About from "./components/about/About";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </>
  );
};

export default App;
