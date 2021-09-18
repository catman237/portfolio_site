import React from 'react'
import './topbar.scss'
import PersonOutlineRoundedIcon from '@material-ui/icons/PersonOutlineRounded';
import MailOutlineRoundedIcon from '@material-ui/icons/MailOutlineRounded';

const Topbar = ({ menuOpen, setMenuOpen }) => {
    return (
        <div className={"topbar " + (menuOpen && "active")}>

            <div className="wrapper">

                <div className="left">

                    <a href="#intro" className="logo">Hughes</a>
                    <div className="itemContainer">
                        <PersonOutlineRoundedIcon className="icon" />
                        <span className="span">631-408-1224</span>
                    </div>
                    <div className="itemContainer">
                        <MailOutlineRoundedIcon className="icon" />
                        <span className="span"><a className='link' href="mailto: ghughes@gmail.com">ghughes610@gmail.com</a></span>
                    </div>
                </div>

                <div className="right">
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className='line1'></span>
                        <span className='line2'></span>
                        <span className='line3'></span>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Topbar
