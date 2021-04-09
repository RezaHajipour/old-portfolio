import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import Nav from "./components/nav/Nav";
// import Footer from "./components/footer/Footer";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Works from "./components/works/Works";
import Contact from "./components/contact/Contact";

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
        <Route path="/skills">
          <Skills />
        </Route>
        <Route path="/works">
          <Works />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </>
  );
};

export default App;
