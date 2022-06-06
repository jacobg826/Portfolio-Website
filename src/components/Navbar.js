import React, { Component } from "react";
import "../styles/Navbar.css";
import LandscapeIcon from "@material-ui/icons/Landscape";

class Navbar extends Component {
  constructor() {
    super();

    this.onClick = this.onClick.bind(this);
  }

  onClick(position) {
    const width = window.innerWidth;
    const height = window.innerHeight;

    let scrollPosition = height * position;
    window.scrollTo({
      top: scrollPosition,
      behavior: "smooth",
    });
    console.log(`${position}`);
  }

  render() {
    return (
      <div className="navbar-container">
        <div className="navbar-logo" onClick={() => this.onClick(0)}>
          <div>JG</div>
          <LandscapeIcon style={{ height: "50", width: "50" }} />
        </div>

        <ul className="nav-menu">
          <li className="nav-item">
            <div className="styled-link" onClick={() => this.onClick(1)}>
              About
            </div>
          </li>
          <li className="nav-item">
            <div className="styled-link" onClick={() => this.onClick(2)}>
              Projects
            </div>
          </li>
          <li className="nav-item">
            <div className="styled-link" onClick={() => this.onClick(10)}>
              Contact
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
