import React from "react";
import Title from "./components/Title/Title";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer"
import "./App.css";

const App = () => (
  <div className="container-fluid mainContainer">
    <Title />
    <Wrapper />
    <Footer />
  </div>
);

export default App;
