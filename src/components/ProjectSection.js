import React, { Component } from "react";
import Project from './Project.js'
import "../styles/ProjectSection.css";

import weatherAppImg from '../images/weatherApp.JPG';
import etchASketchImg from '../images/etchASketch.JPG';
import greenNewsImg from '../images/greenNews.JPG';
import ticTacToeImg from '../images/ticTacToe.JPG';
import belayhuImg from '../images/belayhu.JPG';
import paccarImg from '../images/paccar.JPG'
import faithlifeImg from '../images/faithlife.JPG';

import js from 'programming-languages-logos/src/javascript/javascript.svg'
import css from 'programming-languages-logos/src/css/css.svg'
import html from 'programming-languages-logos/src/html/html.svg'
import kotlin from 'programming-languages-logos/src/kotlin/kotlin.svg'
import c from 'programming-languages-logos/src/c/c.svg'
import java from 'programming-languages-logos/src/java/java.svg'
import python from 'programming-languages-logos/src/python/python.svg'
import lua from 'programming-languages-logos/src/lua/lua.svg'

import reactIcon from '../images/React-icon.svg'
import gitIcon from '../images/Git-icon.svg'
import GitHubIcon from '../images/Github-icon.svg';
import androidStudioIcon from '../images/Android-Studio-Icon.svg'

class ProjectSection extends Component {
    render() {
        return (
            <div>
                <div className="tempSpacing"></div>
                <h2 className="headerText">Here are some technologies I am skilled in:</h2>
                <h3 className="headerText">Languages</h3>
                <div className="skillSection">
                    <img src={js} alt="javascript" className="skill"/>
                    <img src={css} alt="css" className="skill"/>
                    <img src={html} alt="html" className="skill"/>
                    <img src={kotlin} alt="kotlin" className="skill"/>
                    <img src={c} alt="c" className="skill"/>
                    <img src={java} alt="java" className="skill"/>
                    <img src={python} alt="python" className="skill"/>
                    <img src={lua} alt="lua" className="skill"/>

                </div>
                <h3 className="headerText">Other</h3>
                <div className="skillSection">
                    <img src={reactIcon} alt="react" className="skill"/>
                    <img src={gitIcon} alt="git" className="skill"/>
                    <img src={GitHubIcon} alt="git" className="skill"/>
                    <img src={androidStudioIcon} alt="androidStudio" className="skill"/>
                </div>
                <h2 className="headerText">These are some of the projects I have worked on:</h2>
                <div className="projectSection">
                    <Project 
                        title = "Weather App"
                        img = {weatherAppImg}
                        summary = "A weather application that fetches data via WeatherAPI"
                        githubLink = "https://github.com/jacobg826/WeatherApp"
                        demoLink = "https://jacobg826.github.io/WeatherApp"
                    />
                    <Project 
                        title = "Etch-A-Sketch"
                        img = {etchASketchImg}
                        summary = "An Etch A Sketch Game"
                        githubLink = "https://github.com/jacobg826/EtchASketch"
                        demoLink = "https://jacobg826.github.io/EtchASketch"
                    />
                    <Project 
                        title = "Green News"
                        img = {greenNewsImg}
                        summary = "An environmental news aggregator website"
                        githubLink = "https://github.com/jacobg826/green-news"
                        demoLink = "https://earthnews.netlify.app"
                    />
                    <Project 
                        title = "Tic-Tac-Toe"
                        img = {ticTacToeImg}
                        summary = "A Tic-Tac-Toe Game"
                        githubLink = "https://github.com/jacobg826/tic-tac-toe"
                        demoLink = "https://jacobg826.github.io/tic-tac-toe"
                    />
                    <Project 
                        title = "Faithlife"
                        img = {faithlifeImg}
                        summary = "Android Software Developer Intern"
                        demoLink = "https://play.google.com/store/apps/details?id=com.faithlife.mobile&hl=en_US&gl=US"
                    />
                    <Project 
                        title = "BelayHu"
                        img = {belayhuImg}
                        summary = "An embedded system that automates top-rope belay"
                        githubLink = "https://github.com/jacobg826/BelayBot"
                        demoLink = "https://www.youtube.com/watch?v=drQGYvJ-_U8&ab_channel=JacobGervais"    
                    />

                    <div/>
                    <Project 
                        title = "PACCAR"
                        img = {paccarImg}
                        summary = "Embedded Systems Test Engineer"
                    />
                    <div/>
                </div>
            </div>
        );
    }
}

export default ProjectSection