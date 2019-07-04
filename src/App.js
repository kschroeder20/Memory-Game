import React, { Component } from 'react';
import NavBar from "./components/Navbar/Navbar";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import Card from "./components/Card/Card";
import Modal from "./components/Modal/Modal";
import logos from "./logos.json";
import "./app.css"

class App extends Component {
  state = {
    score: 0,
    highscore: 0,
    logos,
    modal: false,
    modalText: "",
  };

  handleScore = () => {
    const newOrder = logos.sort(() => Math.random() - 0.5);
    this.setState({ score: this.state.score + 1, logos: newOrder })
  }

  updateCount = (image) => {
    (image.count !== 0) ? this.stopgame() : image.count += 1;
  }

  stopgame = () => {
    logos.map(card => (card.count = 0));
    let currentScore = this.state.score;

    switch (true) {
      case currentScore === 12:
        this.setState({
          modalText: `Congradulations, you won! You were able to guess all 12 logos without repeating. See if you can do it again!`,
          modal: true,
          highscore: currentScore
        });
        break;
      case currentScore > this.state.highscore:
        this.setState({
          modalText: `Game over. You scored a high score of ${currentScore}!`,
          modal: true,
          highscore: currentScore
        });
        break;
      default:
        this.setState({
          modalText: `Game over. You didn't beat your high score. Try again to get all 12!`,
          modal: true,
        });
        break;
    }
    this.setState({ score: 0 });
  }

  closeModal = () => {
    this.setState({ modal: false })
  }

  render() {
    return (
      <div className="content">
        <Jumbotron />
        <NavBar score={this.state.score} highscore={this.state.highscore} />
        <Card logos={logos} handleScore={this.handleScore} updateCount={this.updateCount} />
        <Modal isOpen={this.state.modal} modalText={this.state.modalText} closeModal={this.closeModal} />
      </div>
    );
  }
}

export default App;

