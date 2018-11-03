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



export default Game;
