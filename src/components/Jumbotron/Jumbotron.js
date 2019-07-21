import React, { Component } from "react";
import "./jumbotron.css";

class Jumbotron extends Component {
    render() {
        return (
            <div id="jumbotronContent" className="jumbotron jumbotron-fluid container">
                <div>
                    <h1 className="display-10" id="instructionHeadline">Remember the Logo</h1>
                    <p className="lead" id="instructionParagraph">
                        Click on an logo to earn points, but don't click on any of the logos more than
                        once! See if you can click on all 12 without repeating.
            </p>
                </div>
            </div>
        );
    }
}

export default Jumbotron;
