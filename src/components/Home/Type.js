import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      style={{color: '#3295f8'}}
      options={{
        strings: [
          
          "Web App Developer",
          "Mobile App Developer",
          "Open Source Contributor",
          "Electronics Engineer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
