import React from "react";
import Typewriter from "typewriter-effect";

const TypeWriter = () => {
  return (
    <Typewriter
      options={{
        strings: [
          "FULL STACK DEVELOPER",
          "MERN STACK DEVELOPER",
          "PROBLEM SOLVING"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 80,
      }}
    />
  );
}

export default TypeWriter;