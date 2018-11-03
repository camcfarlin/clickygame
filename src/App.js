import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Score from "./components/Score";
import gip from "./cards.json";
import "./App.css";

class App extends Component {
  // Setting this.state.gip to the cards json array
  state = {
    gip,
    clickedGiphIds: [],
    score: 0,
    goal: 8,
    status: ""
  };

  //shuffle the pup cards in the browser when clicked
  shuffleScoreCard = id => {
    let clickedGiphIds = this.state.clickedGiphIds;

    if(clickedGiphIds.includes(id)){
      this.setState({ clickedGiphIds: [], score: 0, status:  "Game Over! You lost. Click to play again!" });
      return;
    }else{
      clickedGiphIds.push(id)

      if(clickedGiphIds.length === 8){
        this.setState({score: 8, status: "You Won! Great Job, Smartie! Click to play again!", clickedGiphIds: []});
        console.log('You Win');
        return;
      }

      this.setState({ gip, clickedGiphIds, score: clickedGiphIds.length, status: " " });

      for (let i = gip.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [gip[i], gip[j]] = [gip[j], gip[i]];
      }
    }
  }

  // Map over this.state.cards and render a Card component for each card object
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Clicky Game</h1>
          <p className="App-intro">
            Try not to click the same giph twice, Good Luck!
          </p>
        </header>
        <Score total={this.state.score}
               goal={8}
               status={this.state.status}
               />
        <Wrapper>
          {this.state.gip.map(giph => (
            <Card
              shuffleScoreCard={this.shuffleScoreCard}
              id={giph.id}
              key={giph.id}
              image={giph.image}
            />
          ))}
        </Wrapper>
    </div>
    );
  }
}

export default App;
