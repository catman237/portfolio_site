import { React, useEffect, useRef } from "react";
import "./intro.scss";
import { init } from "ityped";
import icons from "@material-ui/icons";
import portfolio from "../Portfolio/Portfolio";

const Intro = () => {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      strings: [
        "FullStack Software Engineer",
        "Rock Climber",
        "Web Developer",
        "Photographer",
        "Learner",
        "Problem Solver",
      ],
      typeSpeed: 200,
      startDelay: 1000,
      loop: true,
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="bottom">
        <div className="wrapper">
          <h1>Greg Hughes.</h1>
          <span className="textRef" ref={textRef}></span>
          <a href="#portfolio" className="arrow"></a>
        </div>
      </div>

      <div className="top">
        <div className="imgContainer">
          <img
            src="assets/wedding.png"
            alt="profilePicture"
            className="profilePicture"
          />
        </div>
      </div>
    </div>
  );
};

export default Intro;
