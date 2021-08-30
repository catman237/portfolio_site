import React from 'react'
import './topbar.scss'
import PersonOutlineRoundedIcon from '@material-ui/icons/PersonOutlineRounded';
import MailOutlineRoundedIcon from '@material-ui/icons/MailOutlineRounded';

const Topbar = () => {
    return (
        <div className='topbar active'>

            <div className="wrapper">

                <div className="left">
                        
                    <a href="#intro" className="logo">Hughes</a>
                    <div className="itemContainer">
                            <PersonOutlineRoundedIcon classname="icon"/>
                            <span classname="span">631-408-1224</span>
                    </div>
                    <div className="itemContainer">
                        <MailOutlineRoundedIcon classname="icon" />
                        <span classname="span">Ghughes610@gmail.com</span>
                    </div>
                </div>

                <div className="right">
                    <div className="hamburger">
                        <span classname='line1'></span>
                        <span classname='line2'></span>
                        <span classname='line3'></span>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Topbar
