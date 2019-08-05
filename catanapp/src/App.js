import './App.css';
import Dice from './Components/Dice';
import Header from './Components/Header';
import NewYear from './Components/NewYear'
import React, { Component } from 'react'
import EventStack from './Components/EventStack'

export default class App extends Component {
  events = [
    {name: "Catan Prospers", description: "The settlers labor.  Catan prospers!", maxOccurrences: 16},
    {name: "Trade Advantage", description: "The player with the 'Longest Road' card (if not claimed the player with more roads than any other player) may take 1 resource card from any player.  You may not take a development card.\n \n C&K: You may not take a progress card", maxOccurrences: 1},
    {name: "Robber Flees!", description: "The robber returns to the desert.  Do not draw a from any player. ", maxOccurrences: 2},
    {name: "Robber Attacks!", description: "1. Each player with more than 7 cards must discard half of their cards (rounded down).\n 2. Move the robber.  Draw 1 random resource or commmodity card from any 1 player with a settlement next to the robber's hex", requiredDiceRoll: 7 },
    {name: "Conflict", description: "The player with the 'Largest Army' card (if not claimed, the single player with the most knight cards) takes 1 resource card at random from any one player. \n \n  C&K: Each player with the highest total value of active knights takes 1 random resource/commodity card.  You may not take a progress card.", maxOccurrences: 1},
    {name: "Tournament", description: "The player(s) with the most knight cards revealed takes 1 resources of their choice from the bank.\n \n C&K: The player(s) with the most active knight points takes 1 resource card.  You may not take a commodity card.", maxOccurrences: 1},
    {name: "Earthquake", description: "Each player turns 1 (maximum) of his roads sideways.  You may not build roads until you pay 1 lumber and 1 brick to repair your turned road.  Roads turned sideways still count towards the 'Longest Road.'", maxOccurrences: 1},
    {name: "Neighborly Assistance", description: "The player(s) with the most VPs give(s) 1 player with fewer VPs 1 resource card of the giver's choice.  If a giver doesn't have a resource card to give, that giver ignroes this event.\n \n  C&K: You may give a commodity in place of a resource.  You must give a commodity if that's all you have.", maxOccurrences: 10},
    {name: "Epidemic", description: "Each player recieves only 1 resource for each of their cities that produces this turn.\n \n  C&K: You may not take a commodity card.", maxOccurrences: 2},
    {name: "Plentiful Year", description: "Each player takes 1 resource of his choice from the bank.\n \n C&K: You may not take a commodity card.", maxOccurrences: 1},
    {name: "Calm Seas", description: "The player(s) with the most harbors recieve(s) 1 resource card of their choice from the bank.\n \n C&K: You may not take a commodity card.", maxOccurrences: 2},
    {name: "Good Neighbors", description: "Each player gives the player to his left 1 resource of the giver's choice (if they have one).\n \n C&K: instead of a resource you may give a commodity.  You must give a commodity if you do not have a resource.", maxOccurrences: 1} ,
  ];

  state = {      
      rollOutcomes: [{number: 2, occurrences: 0},{number: 3, occurrences: 0},{number: 4, occurrences: 0},{number: 5, occurrences: 0},{number: 6, occurrences: 0},{number: 7, occurrences: 0},{number: 8, occurrences: 0},{number: 9, occurrences: 0},{number: 10, occurrences: 0},{number: 11, occurrences: 0},{number: 12, occurrences: 0}],    
      eventOutcomes: [0,0,0,0,0,0,0,0,0,0,0,0],
      event: {name: "", description: "", maxOccurrences: 1, requiredDiceRoll: 0 },
      isNewYear: false,
      rollCount:0,
      roll:  " "
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
        occurrences = this.state.rollOutcomes.find(item => item.number === roll).occurrences;
        combinations = possibleOutcomes.find(item => item.number ===  roll).combinations;

        console.log(combinations);
    }while(occurrences >= combinations)

    this.setState({roll: roll});  
    this.setState((prevState, props) => {return {rollCount: prevState.rollCount + 1}});       

    const newOutcomes = [...this.state.rollOutcomes];
    newOutcomes.find(item => item.number === roll).occurrences++;
    this.setState({rollOutcomes: newOutcomes});  
    
    let event = this.events.find(p => p.requiredDiceRoll === roll);
     
    if(event !== undefined) {
      this.setState({event:event});
    }
    else{
      this.drawEvent();
    }
    
  }

  drawEvent(){
    let roll = Math.floor(Math.random() * this.events.length)
    let fixEvent = this.events.find(p => p.requiredDiceRoll === roll);

    if(fixEvent !== undefined || this.events[roll].requiredDiceRoll !== undefined){
      this.drawEvent();
      return;
    }

    let event = this.events[roll];

    if(event.maxOccurrences <= this.state.eventOutcomes[roll]) {
      console.log("redrawing event card");
      this.drawEvent();
      return;
    }
     

    const outcomes = [...this.state.eventOutcomes];
    outcomes[roll]++;

    this.setState({eventOutcomes: outcomes});
    this.setState({event: event});

  }

  newYear(){
    this.setState({isNewYear:true});
  }

  janTheFirst(){
    this.setState({isNewYear:false});
    this.setState({rollCount: 0});
    this.setState({rollOutcomes: [{number: 2, occurrences: 0},{number: 3, occurrences: 0},{number: 4, occurrences: 0},{number: 5, occurrences: 0},{number: 6, occurrences: 0},{number: 7, occurrences: 0},{number: 8, occurrences: 0},{number: 9, occurrences: 0},{number: 10, occurrences: 0},{number: 11, occurrences: 0},{number: 12, occurrences: 0}]});
    this.setState({ eventOutcomes: [0,0,0,0,0,0,0,0,0,0,0,0]});
  }

  render() {
    return (      
      <div style={{width: 800}}>     
          <Header/>
          <Dice recordRoll={this.recordRoll} roll={this.state.roll} >/></Dice>   
          <EventStack {...this.state.event}/>
          <NewYear isNewYear={this.state.isNewYear} janTheFirst={this.janTheFirst}     />
      </div>
    );    
  }
}
