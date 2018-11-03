import React, { Component } from 'react';
import './Game.css';
import CardView from './CardView';
import MemoryCards from './MemoryCards';


class Game extends Component {
  constructor(props) {
    super(props);
    this.onCardClicked = this.onCardClicked.bind(this);
    this.onPlayAgain = this.onPlayAgain.bind(this);
    this.memoryCards = new MemoryCards();
  }

  componentWillMount() {
    this.initGame();
  }

  initGame() {
    this.memoryCards.generateCardSet();
    this.setState({
      turnNo : 1,
      pairsFound : 0,
      numClicksWithinTurn : 0,
      firstId : undefined,
      secondId : undefined
    });
  }


}

export default Game;
