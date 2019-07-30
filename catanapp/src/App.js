import './App.css';
import Dice from './Components/Dice';
import Header from './Components/Header';

import React, { Component } from 'react'

export default class App extends Component {

  state = {
      possibleOutcomes: [{number: 2, combinations: 1}, {number:3, combinations:2}, {number:4, combinations:3}, {number:5, combinations:4}, {number:6, combinations:5},{number:7, combinations:6},{number:8, combinations:5}, {number:9,  combinations: 4}, {number:10,  combinations: 3}, {number:11,  combinations: 2}, {number:12,  combinations: 1} ],
      currentOutcomes: [{number: 2, occurrences: 0},{number: 3, occurrences: 0},{number: 4, occurrences: 0},{number: 5, occurrences: 0},{number: 6, occurrences: 0},{number: 7, occurrences: 0},{number: 8, occurrences: 0},{number: 9, occurrences: 0},{number: 10, occurrences: 0},{number: 11, occurrences: 0},{number: 12, occurrences: 0}],    
  }
  
  constructor(props){
    super(props);
    this.recordRoll = this.recordRoll.bind(this);//binding the event hadnler so that state can change, this is a JS thing apparently
  }

  recordRoll(roll) {
    const newOutcomes = [...this.state.currentOutcomes];
    newOutcomes.find(item => item.number === roll).occurrences++;
    this.setState({currentOutcomes: newOutcomes});

    console.log("from app.js" + roll);
   
  }

  render() {
    return (
      <div style={{width: 800}}>
        <Header/>
        <Dice recordRoll={this.recordRoll} possibleOutcomes = {this.state.possibleOutcomes} currentOutcomes = {this.state.possibleOutcomes}>/></Dice>      
      </div>
    );    
  }
}
