import React, { Component } from 'react'
class Clock extends Component {
    constructor() {
        super()
        this.state = {
            date: new Date()
        }
    }

    componentWillMount() {
        console.log("setInterval")
        this.timer = setInterval(() => {
            this.setState({
                date: new Date()
            })
        }, 1000)
    }
    componentDidMount() {
        console.log("ClockDid");
    }
    render() {
        console.log("render2")
        return (
            <div>
        <h1>
          <p>现在的时间是</p>
          {this.state.date.toLocaleTimeString()}
        </h1>
      </div>
        )
    }
}

export { Clock }