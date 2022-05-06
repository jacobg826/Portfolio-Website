import React, { Component } from 'react'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import DescriptionIcon from '@material-ui/icons/Description';
import '../styles/Footer.css'



class Footer extends Component {


    render() {
        
        return (
            <div className='footer-container'>
                <ul className='foot-menu'>
                    <li className ='foot-item'>
                        <a 
                            href="https://github.com/jacobg826" 
                            target="_blank" 
                            className='styled-foot' 
                            rel="noreferrer">
                            <GitHubIcon/>
                        </a>
                    </li>
                    <li className ='foot-item'>
                        <a 
                            href="https://www.linkedin.com/in/jacob-gervais-27b2ba195/"
                            target="_blank"
                            className='styled-foot'
                            rel="noreferrer">
                            <LinkedInIcon/>
                        </a>
                    </li>
                    <li className = 'foot-item'>
                        <a 
                            href="https://docs.google.com/document/d/14ieLnemzck-tZVOp8IfyDz_6AmnlGg9i6GiNd-kTVGQ/edit?usp=sharing"
                            target="_blank"
                            className="styled-foot" rel="noreferrer">
                            <DescriptionIcon/>
                        </a>
                    </li>
                    <li className ='foot-item'>
                        <a href="mailto:gervais.jacob@gmail.com" target="_blank" className='styled-foot' rel="noreferrer">
                            <MailOutlineIcon/>
                        </a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Footer