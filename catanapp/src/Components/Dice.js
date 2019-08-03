import React, { Component } from 'react'

export default class Dice extends Component {    

    onClick = () => {
        this.props.recordRoll();      
    }

    render() {
        return (
            <div style={{display: 'flex',   marginTop: 5}}>
                <span style={{flex: "10", textAlign: "center", color: "#263940", fontSize:144}}>{this.props.roll}</span>
                <button onClick={this.onClick} style={{padding: 15, display: "inline-block", border:"none", flex: "1",background: "#c2e6f2", color: "#263940", fontSize:72}}>Roll</button>
            </div>
        )
    }
}
