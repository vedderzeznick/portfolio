import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      style={{color: '#3295f8'}}
      options={{
        strings: [
          "Electronics Engineer",
          "Web App Developer",
          "Mobile App Developer",
          "Open Source Contributor",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
