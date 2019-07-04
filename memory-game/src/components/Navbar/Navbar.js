import React, { Component } from "react";
import "./navbar.css";

class NavBar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-light bg-light">
                    <ul>
                        <li>Memory Game</li>
                        <li> </li>
                        <li>Current Score : {this.props.score}</li>
                        <li>High Score : {this.props.highscore}</li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default NavBar;
