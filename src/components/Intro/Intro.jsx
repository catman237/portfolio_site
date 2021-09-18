import {React, useEffect, useRef} from 'react'
import './intro.scss'
import { init } from 'ityped'

const Intro = () => {

  const textRef = useRef()

  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      strings: [
        "FullStack Software Developer",
        "Web Developer",
        "Rock Climber",
        "Learner"
      ]
    })
  },[])

    return (
        <div className="intro" id="intro">
          <div className="left">
            <div className="imgContainer">
              <img src="assets/IMG_0301.png" alt="profilePicture" className="profilePicture" />
            </div>
          </div>
          <div className="right">
            <div className="wrapper">
              <h2>Hello there, I'm</h2>
              <h1>Greg Hughes</h1>
              <span ref={textRef}></span>
                <a className="arrow" href="#portfolio"></a>
            </div>
          </div>
        </div>
    )
}

export default Intro
