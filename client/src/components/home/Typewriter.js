import React from "react";
import Typewriter from "typewriter-effect";

const TypeWriter = () => {
  return (
    <Typewriter
      options={{
        strings: [
          "Developer",
          "Deep Learning Engineer",
          "MERN Stack Developer",
          "Open Source Contributor",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default TypeWriter;