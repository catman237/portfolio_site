import { React, useEffect, useRef } from 'react'
import './intro.scss'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { init } from 'ityped'
import icons from '@material-ui/icons'
import portfolio from '../Portfolio/Portfolio'

const Intro = () => {

  const textRef = useRef()

  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      strings: [
        "I am a FullStack Software Engineer",
        "I am a Web Developer",
        "I am a Rock Climber",
        "I am a Learner",
        "I am a Problem Solver"
      ],
      typeSpeed: 125,
      startDelay: 1000,
      loop: true
    })
  }, [])

  return (

    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/IMG_0301.png" alt="profilePicture" className="profilePicture" />
        </div>
      </div>
      <Router>
        <div className="right">
          <div className="wrapper">
            <h2>Hello there, I'm</h2>
            <h1>Greg Hughes.</h1>
            <span className="textRef"ref={textRef}></span>
            <a href="#portfolio" className="arrow"></a>
          </div>
        </div>
      </Router>
    </div>

  )
}

export default Intro
