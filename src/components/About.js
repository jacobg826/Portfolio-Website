import React, { Component } from "react";
import DescriptionIcon from '@material-ui/icons/Description';
import '../styles/About.css'


class About extends Component {
    render() {
        return (
            <div>
                <p>Hi! I'm Jacob. I'm a software developer and embedded systems engineer. </p>
                <p>I have professional experience as an Android App Developer and as an Embedded Systems
                Verification Engineer. Outside of work I've been teaching myself skills in web development. 
                I believe all of these background experiences give me a wide bredth of knowledge across the fields of Computer Science and Electrical 
                Engineering. The projects I have tackled have made me a versatile Engineer, equipped to tackle ambiguous or challenging problems.     
                </p>
                <p>While I'm not working, you can find me out in the wilderness. I love spending my free time backpacking, 
                running, moutain biking, or rock climbing. </p>
                <div className='resumeSection'>
                    <h2>Check out my resume</h2>
                    <a 
                    href="https://docs.google.com/document/d/14ieLnemzck-tZVOp8IfyDz_6AmnlGg9i6GiNd-kTVGQ/edit?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                    className='resumeIcon'>
                    <DescriptionIcon/>
                </a>
                </div>
            </div>
        );
    }
}

export default About