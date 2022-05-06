import React, { Component } from "react";
import '../styles/Project.css'

import GitHubIcon from '@material-ui/icons/GitHub';
import DemoIcon from '@material-ui/icons/OndemandVideo';


class Project extends Component {
    render() {
        return (
            <div className="project">
                <img src={this.props.img} alt={this.props.title} className="image"/>
                <h1 className="title">{this.props.title}</h1>
                <p className="description">{this.props.summary}</p>
                <div className="foot">
                    { this.props.demoLink != null ?
                        <a href={this.props.demoLink} target="_blank" rel="noreferrer" className="linkIcon">
                            <DemoIcon/>
                        </a> : null
                    }
                    { this.props.githubLink != null ?
                        <a href={this.props.githubLink} target="_blank" rel="noreferrer" className="linkIcon">
                            <GitHubIcon/>
                        </a> : null
                    } 
                </div>  
            </div>
        );
    }
}

export default Project