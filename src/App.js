import "./App.css";
import Card from "./components/card";
import React, { Component } from "react";
import { card1Value, card2Value, card3Value } from "./services/cardservice";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      round: 1,
      score: 0,
      card1: card1Value(),
      card2: card2Value(),
      card3: card3Value(),
    };
  }
  submit = () => {
    this.setState({ round: this.state.round + 1 });
    this.setCards();
  };
  lose = () => {
    if (this.state.score > 0) {
      this.setState({ score: this.state.score - 1 });
    }
    this.submit();
    window.alert("You lose! The value of Card 3 is " + this.state.card3);
  };
  win = () => {
    this.setState({ score: this.state.score + 1 });
    this.submit();
    window.alert("You win! Thw value of Card 3 is " + this.state.card3);
  };
  setCards = () => {
    this.setState({
      card1: card1Value(),
      card2: card2Value(),
      card3: card3Value(),
    });
  };

  resetGame = () => {
    this.setState({
      round: 1,
      score: 0,
    });
  };
  deal = () => {
    if (
      this.state.card3 > this.state.card1 &&
      this.state.card3 < this.state.card2
    ) {
      this.win();
    } else {
      this.lose();
    }
  };
  noDeal = () => {
    if (
      this.state.card3 < this.state.card1 ||
      this.state.card3 > this.state.card2
    ) {
      this.win();
    } else {
      this.lose();
    }
  };
  higher = () => {
    if (this.state.card1 < this.state.card3) {
      this.win();
    } else {
      this.lose();
    }
  };
  lower = () => {
    if (this.state.card1 > this.state.card3) {
      this.win();
    } else {
      this.lose();
    }
  };
  render() {
    if (this.state.card1 == this.state.card2) {
      return (
        <div className="background">
          <div className="container">
            <h1 className="game-title">Deal or No Deal</h1>
            <div className="row yllw-box">
              <div className="col left-margin">
                <div className="row score-row">
                  <div className="col">Round {this.state.round}</div>
                  <div className="col"> Score: {this.state.score} </div>
                </div>
                <div className="row card-row">
                  <div className="col">
                    <Card value={this.state.card1} />
                  </div>
                  <div className="col">
                    <Card value={this.state.card2} />
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card-result-container">
                  <button onClick={this.higher}>Higher</button>
                  <button onClick={this.lower}>Lower</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (this.state.round === 6) {
      return (
        <React.Fragment>
          <p className="game-over-container">
          <h1 className="game-over">Game over your score is {this.state.score}</h1>
          <button onClick={this.resetGame} className="play-again">Play Again</button>
          </p>
          
        </React.Fragment>
      );
    } else {
      return (
        <div className="background">
          <div className="container">
            <h1 className="game-title">Deal or No Deal</h1>
            <div className="row yllw-box">
              <div className="col left-margin">
                <div className="row score-row">
                  <div className="col">Round {this.state.round}</div>
                  <div className="col"> Score: {this.state.score} </div>
                </div>
                <div className="row card-row">
                  <div className="col">
                    <Card value={this.state.card1} />
                  </div>
                  <div className="col">
                    <Card value={this.state.card2} />
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card-result-container">
                  <button onClick={this.deal}>Deal</button>
                  <button onClick={this.noDeal}>No Deal</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default App;
