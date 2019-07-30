import React, { Component } from 'react'

export default class Dice extends Component {
    
    state = {
        roll: 3,
        rollCount:0,
    }

    onClick = () => {
        if(this.state.rollCount >= 31){
            alert("happy new year!");
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
       
            occurrences = this.props.outcomes.currentOutcomes.find(item => compare(item.number)).occurrences
            combinations = this.props.outcomes.possibleOutcomes.find(item => compare(item.number) ).combinations
    
            console.log(combinations);
        }while(occurrences >= combinations)

        this.props.recordRoll(roll);
        this.setState({rollCount: this.state.rollCount + 1});
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
