import React, { Component } from "react";
import "./../../styles/slides.css";
import left from "./../../imgs/left.png";
import type1 from "./../../imgs/type1.png";
import type2 from "./../../imgs/type2.png";
import type3 from "./../../imgs/type3.png";
import title4 from "./../../imgs/s4Title.png";
import cryMan from "./../../imgs/cryingMan.png";

class Slide4 extends Component {
  render() {
    return (
      <div className="Slide4">
        <img id="s4title" src={title4} alt="title" />
        <img id="type1" src={type1} alt="type 1"></img>
        <img id="type2" src={type2} alt="type 2"></img>
        <img id="type3" src={type3} alt="type 3"></img>
        <img id="cry-man" src={cryMan} alt="cry man"></img>
      </div>
    );
  }
}

export default Slide4;
