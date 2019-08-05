import React, { Component } from 'react'

export default class EventStack extends Component {

    render() {
        return (
            <div>
                <header style={{color: "#263940"}}><h1>{this.props.name}</h1></header>
                <div style={{color: "#263940"}}>{this.props.description.split("\n").map((text, i) => i ? [<br/>, text] : text)}</div>
            </div>
        )
    }
}
