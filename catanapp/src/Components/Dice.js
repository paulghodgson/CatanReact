import React, { Component } from 'react'

export default class Dice extends Component {
    
    state = {
        roll: 3
    }

    onClick = () => {
        let roll =  this.rollDice() + this.rollDice();            
       
        let occurrences = this.props.outcomes.currentOutcomes.find(item => item.number === roll ).occurrences
        let combinations = this.props.outcomes.possibleOutcomes.find(item => item.number === roll ).combinations

        console.log(combinations);

        if(occurrences >= combinations){
            return this.onClick();
        }

        this.props.recordRoll(roll);

        this.setState({roll: roll});    
        // if(this.state.outcomes.currentOutcomes.single(item => item.number == roll ).occurrences >= this.stati.outcomes.possibleOutcomes.single(item => item.number == roll)){
        //     alert("wibble");
        // }
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
