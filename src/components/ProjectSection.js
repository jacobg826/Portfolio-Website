import React, { Component } from "react";
import Project from "./Project.js";
import "../styles/ProjectSection.css";
import "../styles/General.css";

import weatherAppImg from "../images/weatherApp.JPG";
import etchASketchImg from "../images/etchASketch.JPG";
import greenNewsImg from "../images/greenNews.JPG";
import ticTacToeImg from "../images/ticTacToe.JPG";
import belayhuImg from "../images/belayhu.JPG";
import paccarImg from "../images/paccar.JPG";
import faithlifeImg from "../images/faithlife.JPG";
import nintyNineSpokesImg from "../images/99Spokes.jpg";

class ProjectSection extends Component {
  render() {
    return (
      <div>
        <h2 className="textAlignment">Projects and Professional Experience:</h2>
        <div className="projectSection">
          <Project
            title="Weather App"
            img={weatherAppImg}
            summary="A weather application that fetches data via WeatherAPI"
            githubLink="https://github.com/jacobg826/WeatherApp"
            demoLink="https://jacobg826.github.io/WeatherApp"
          />
          <Project
            title="Etch-A-Sketch"
            img={etchASketchImg}
            summary="An Etch A Sketch Game"
            githubLink="https://github.com/jacobg826/EtchASketch"
            demoLink="https://jacobg826.github.io/EtchASketch"
          />
          <Project
            title="Green News"
            img={greenNewsImg}
            summary="An environmental news aggregator website"
            githubLink="https://github.com/jacobg826/green-news"
            demoLink="https://earthnews.netlify.app"
          />
          <Project
            title="Tic-Tac-Toe"
            img={ticTacToeImg}
            summary="A Tic-Tac-Toe Game"
            githubLink="https://github.com/jacobg826/tic-tac-toe"
            demoLink="https://jacobg826.github.io/tic-tac-toe"
          />
          <Project
            title="BelayHu"
            img={belayhuImg}
            summary="An embedded system that automates top-rope belay"
            githubLink="https://github.com/jacobg826/BelayBot"
            demoLink="https://www.youtube.com/watch?v=drQGYvJ-_U8&ab_channel=JacobGervais"
          />
          <Project
            title="Faithlife"
            img={faithlifeImg}
            summary="Android Software Developer Intern"
            demoLink="https://play.google.com/store/apps/details?id=com.faithlife.mobile&hl=en_US&gl=US"
          />
          <Project
            title="99 Spokes"
            img={nintyNineSpokesImg}
            summary="Software Developer"
            demoLink="https://99spokes.com/"
          />
          <Project
            title="PACCAR"
            img={paccarImg}
            summary="Embedded Systems Test Engineer"
          />
        </div>
      </div>
    );
  }
}

export default ProjectSection;
