import React, { Component } from "react";
import "./navbar.css";

class NavBar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-light bg-light justify-content-center container">
                    <ul>
                        {/* <li className="gameTitle">Remember the Logo</li> */}
                        <li className="scoreDisplay">Current Score : {this.props.score}</li>
                        <li className="scoreDisplay">High Score : {this.props.highscore}</li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default NavBar;
