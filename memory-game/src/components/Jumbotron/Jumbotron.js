import React, { Component } from "react";
import "./jumbotron.css";

class Jumbotron extends Component {
    render() {
        return (
            <div>
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1 className="display-4">Test Your Memory</h1>
                        <p className="lead">
                            Click on an image to earn points, but don't click on any more than
                            once!
            </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Jumbotron;