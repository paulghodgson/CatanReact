import './App.css';
import Dice from './Components/Dice';
import Header from './Components/Header';
import NewYear from './Components/NewYear'
import React, { Component } from 'react'

export default class App extends Component {

  state = {      
      currentOutcomes: [{number: 2, occurrences: 0},{number: 3, occurrences: 0},{number: 4, occurrences: 0},{number: 5, occurrences: 0},{number: 6, occurrences: 0},{number: 7, occurrences: 0},{number: 8, occurrences: 0},{number: 9, occurrences: 0},{number: 10, occurrences: 0},{number: 11, occurrences: 0},{number: 12, occurrences: 0}],    
      isNewYear: true,
      rollCount:0,
  }
  
  constructor(props){
    super(props);
    this.recordRoll = this.recordRoll.bind(this);//binding the event hadnler so that state can change, this is a JS thing apparently
    this.newYear = this.newYear.bind(this);
    this.janTheFirst = this.janTheFirst.bind(this);
  }

  recordRoll(roll) {
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
          <Dice recordRoll={this.recordRoll}  currentOutcomes = {this.state.currentOutcomes} newYear={this.newYear} rollCount={this.state.rollCount}>/></Dice>   
          <NewYear  isNewYear={this.state.isNewYear} janTheFirst={this.janTheFirst}     />
      </div>
    );    
  }
}
