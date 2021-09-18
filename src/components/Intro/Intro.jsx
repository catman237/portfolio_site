import React from 'react'
import './intro.scss'

const Intro = () => {
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
              <h3>Software Engineer</h3>
              <a href="#portfolio">
                <div className="arrow"></div>
              </a>
            </div>
          </div>
        </div>
    )
}

export default Intro
