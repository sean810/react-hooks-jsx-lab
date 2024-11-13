import React from "react";
import { image } from "../data/data"; // Use curly braces to import the named export

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>
        I am passionate about web development and enjoy creating functional and
        beautiful user interfaces.
      </p>
      <img src={image} alt="I made this" />
    </div>
  );
}

export default About;

