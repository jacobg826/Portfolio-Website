import React, { Component } from "react";
import '../styles/General.css'
import '../styles/Contact.css'

class Contact extends Component {
    render() {
        return (
            <div className="contactSection">
                <div>
                    <h1 className="contactText">
                        Interested in working with me?
                    </h1>
                    <h1 className="contactText">
                        Feel free to reach out and contact me at gervais.jacob@gmail.com.
                    </h1>
                </div>
                <a 
                href="mailto:gervais.jacob@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="button">
                    Email Me!
                </a>

            </div>
        );
    }
}

export default Contact
