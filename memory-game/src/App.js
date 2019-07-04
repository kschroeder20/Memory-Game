import React, { Component } from 'react';
import NavBar from "./components/Navbar/Navbar";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import Card from "./components/Card/Card";
import Modal from "./components/Modal/Modal"

const cards = [
  {
    id: 1,
    name: "Hawks",
    url: "http://content.sportslogos.net/logos/6/220/full/9168_atlanta_hawks-primary-2016.png",
    count: 0
  },
  {
    id: 2,
    name: "Celtics",
    url: "http://content.sportslogos.net/logos/6/213/full/slhg02hbef3j1ov4lsnwyol5o.png",
    count: 0
  },
  {
    id: 3,
    name: "Nets",
    url: "http://content.sportslogos.net/logos/6/3786/full/137_brooklyn-nets-primary-2013.png",
    count: 0
  },
  {
    id: 4,
    name: "Hornets",
    url: "http://content.sportslogos.net/logos/6/5120/full/1926_charlotte__hornets_-primary-2015.png",
    count: 0
  },
  {
    id: 5,
    name: "Bulls",
    url: "http://content.sportslogos.net/logos/6/221/full/hj3gmh82w9hffmeh3fjm5h874.png",
    count: 0
  },
  {
    id: 6,
    name: "Cavaliers",
    url: "http://content.sportslogos.net/logos/6/222/full/6921_cleveland_cavaliers-primary-2018.png",
    count: 0
  },
  {
    id: 7,
    name: "Mavericks",
    url: "http://content.sportslogos.net/logos/6/228/full/3463_dallas_mavericks-primary-2018.png",
    count: 0
  },
  {
    id: 8,
    name: "Nuggets",
    url: "http://content.sportslogos.net/logos/6/229/full/8926_denver_nuggets-primary-2019.png",
    count: 0
  },
  {
    id: 9,
    name: "Pistons",
    url: "http://content.sportslogos.net/logos/6/223/full/2164_detroit_pistons-primary-2018.png",
    count: 0
  },
  {
    id: 10,
    name: "Warriors",
    url: "http://content.sportslogos.net/logos/6/235/full/qhhir6fj8zp30f33s7sfb4yw0.png",
    count: 0
  },
  {
    id: 11,
    name: "Pacers",
    url: "http://content.sportslogos.net/logos/6/224/full/4812_indiana_pacers-primary-2018.png",
    count: 0
  }, {
    id: 12,
    name: "Clippers",
    url: "http://content.sportslogos.net/logos/6/236/full/5462_los_angeles_clippers-primary-2016.png",
    count: 0
  }
];

class App extends Component {
  state = {
    score: 0,
    highscore: 0,
    cards,
    modal: false,
    modalText: "",
  };

  handleScore = () => {
    const newOrder = cards.sort(() => Math.random() - 0.5);
    this.setState({ score: this.state.score + 1, cards: newOrder })
    // this.setState({ cards: newOrder })
  }

  updateCount = (image) => {
    (image.count !== 0) ? this.stopgame() : image.count += 1;
  }

  stopgame = () => {
    cards.map(card => (card.count = 0));
    let currentScore = this.state.score;

    switch (true) {
      case currentScore === 12:
        this.setState({
          modalText: `Congradulations, you won! You were able to guess all 12 cards without repeating. See if you can do it again!`,
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
      <div>
        <NavBar score={this.state.score} highscore={this.state.highscore} />
        <Jumbotron />
        <Card card={cards} handleScore={this.handleScore} updateCount={this.updateCount} />
        <Modal isOpen={this.state.modal} modalText={this.state.modalText} closeModal={this.closeModal} />
      </div>
    );
  }
}

export default App;

