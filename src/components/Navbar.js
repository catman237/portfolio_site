import React from 'react'
import '../Styles/Navbar.css'


const Navbar = () => {
    return (
        <div className="navBar">
            <h1 className="header">GREG HUGHES</h1>
            <div className="mediaContent">
                <a href="#">Home</a>
                <a href="#">About Me</a>
                <a href="#">Projects</a>
            </div>
            <div className="navBarRight">
                    <p classname="quote">
                        “The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty.”  -Winston Churchill
                    </p>
            </div>
        </div>
    )
}

export default Navbar
