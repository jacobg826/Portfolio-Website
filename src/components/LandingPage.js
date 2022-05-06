import React, { Component } from "react";
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import '../styles/LandingPage.css'

class LandingPage extends Component {
    render() {
        return (
            <div className='landingPage'>
                <div className="tempSpacing"></div>
                <h2 className='landingText'>Hi there. I'm</h2>
                <div className='name'>
                    <h1 className='letter'>J</h1>
                    <h1 className='letter'>a</h1>
                    <h1 className='letter'>c</h1>
                    <h1 className='letter'>o</h1>
                    <h1 className='letter'>b</h1>
                </div>
                <div className='name'>
                    <h1 className='letter'>G</h1>
                    <h1 className='letter'>e</h1>
                    <h1 className='letter'>r</h1>
                    <h1 className='letter'>v</h1>
                    <h1 className='letter'>a</h1>
                    <h1 className='letter'>i</h1>
                    <h1 className='letter'>s</h1>
                </div> 
                <h2 className='landingText'>Software Developer / Embedded Systems Engineer</h2>
                <ul className='menu'>
                    <li className ='menu-item'>
                        <a 
                            href="https://github.com/jacobg826" 
                            target="_blank" 
                            className='styled-menu' 
                            rel="noreferrer">
                            <GitHubIcon/>
                        </a>
                    </li>
                    <li className ='menu-item'>
                        <a 
                            href="https://www.linkedin.com/in/jacob-gervais-27b2ba195/"
                            target="_blank"
                            className='styled-menu'
                            rel="noreferrer">
                            <LinkedInIcon/>
                        </a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default LandingPage