import React, { Component } from 'react'

export default class EventStack extends Component {

    render() {
        return (
            <div>
                <header>{this.props.name}</header>
                <div>{this.props.description}</div>
            </div>
        )
    }
}
