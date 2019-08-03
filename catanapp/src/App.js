import './App.css';
import Dice from './Components/Dice';
import Header from './Components/Header';
import NewYear from './Components/NewYear'
import React, { Component } from 'react'

export default class App extends Component {

  state = {      
      currentOutcomes: [{number: 2, occurrences: 0},{number: 3, occurrences: 0},{number: 4, occurrences: 0},{number: 5, occurrences: 0},{number: 6, occurrences: 0},{number: 7, occurrences: 0},{number: 8, occurrences: 0},{number: 9, occurrences: 0},{number: 10, occurrences: 0},{number: 11, occurrences: 0},{number: 12, occurrences: 0}],    
      isNewYear: false,
      rollCount:0,
      roll:  this.rollDice() + this.rollDice()
  }
  
  rollDice() {
    return Math.ceil(Math.random() * 6);
}

  constructor(props){
    super(props);
    this.recordRoll = this.recordRoll.bind(this);//binding the event hadnler so that state can change, this is a JS thing apparently
    this.newYear = this.newYear.bind(this);
    this.janTheFirst = this.janTheFirst.bind(this);
  }

  recordRoll() {
    const possibleOutcomes =  [{number: 2, combinations: 1}, {number:3, combinations:2}, {number:4, combinations:3}, {number:5, combinations:4}, {number:6, combinations:5},{number:7, combinations:6},{number:8, combinations:5}, {number:9,  combinations: 4}, {number:10,  combinations: 3}, {number:11,  combinations: 2}, {number:12,  combinations: 1} ];

    let occurrences;    
    let combinations;
   
    if(this.state.rollCount >= 31){
        this.newYear();
        return;
    }
    let roll;

    do {  
         roll = this.rollDice() + this.rollDice();
        occurrences = this.state.currentOutcomes.find(item => item.number === roll).occurrences;
        combinations = possibleOutcomes.find(item => item.number ===  roll).combinations;

        console.log(combinations);
    }while(occurrences >= combinations)

    this.setState({roll: roll});  
    this.setState((prevState, props) => {return {rollCount: prevState.rollCount + 1}});       

    const newOutcomes = [...this.state.currentOutcomes];
    newOutcomes.find(item => item.number === roll).occurrences++;
    this.setState({currentOutcomes: newOutcomes});   
  }

  newYear(){
    this.setState({isNewYear:true});
  }

  janTheFirst(){
    this.setState({isNewYear:false});
    this.setState({rollCount: 0});
    this.setState({currentOutcomes: [{number: 2, occurrences: 0},{number: 3, occurrences: 0},{number: 4, occurrences: 0},{number: 5, occurrences: 0},{number: 6, occurrences: 0},{number: 7, occurrences: 0},{number: 8, occurrences: 0},{number: 9, occurrences: 0},{number: 10, occurrences: 0},{number: 11, occurrences: 0},{number: 12, occurrences: 0}]});
  }

  render() {
    return (      
      <div style={{width: 800}}>     
          <Header/>
          <Dice recordRoll={this.recordRoll} roll={this.state.roll} >/></Dice>   
          <NewYear isNewYear={this.state.isNewYear} janTheFirst={this.janTheFirst}     />
      </div>
    );    
  }
}
