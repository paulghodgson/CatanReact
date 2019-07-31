import React, { Component } from 'react'

export default class Dice extends Component {
    
    possibleOutcomes =  [{number: 2, combinations: 1}, {number:3, combinations:2}, {number:4, combinations:3}, {number:5, combinations:4}, {number:6, combinations:5},{number:7, combinations:6},{number:8, combinations:5}, {number:9,  combinations: 4}, {number:10,  combinations: 3}, {number:11,  combinations: 2}, {number:12,  combinations: 1} ];

    state = {
        roll: this.rollDice() + this.rollDice(),
        rollCount:0,
    }

    onClick = () => {
        if(this.state.rollCount >= 31){
            this.props.newYear();
            return;
        }

        let occurrences;
        let combinations;
        let roll;
        
        function compare(number){
            return number  === roll
        };

        do {
             roll =  this.rollDice() + this.rollDice();            
       
            occurrences = this.props.currentOutcomes.find(item => compare(item.number)).occurrences;
            combinations = this.possibleOutcomes.find(item => compare(item.number) ).combinations;
    
            console.log(combinations);
        }while(occurrences >= combinations)

        this.props.recordRoll(roll);
        this.setState((prevState, props) => {return {rollCount: prevState.rollCount + 1}});
        this.setState({roll: roll});  
    }

    rollDice() {
        return Math.ceil(Math.random() * 6);
    }

    render() {
        return (
            <div style={{display: 'flex',   marginTop: 5}}>
                <span style={{flex: "10", textAlign: "center", color: "#263940", fontSize:144}}>{this.state.roll}</span>
                <button onClick={this.onClick} style={{padding: 15, display: "inline-block", border:"none", flex: "1",background: "#c2e6f2", color: "#263940", fontSize:72}}>Roll</button>
            </div>
        )
    }
}
