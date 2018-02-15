import React, { Component} from 'react';

export const concepts = {
    text: 'Functional Componenets',
    done: false
}

export default class ClockApp extends Component {
    constructor(props) {
        super(props)
        var date = this.getTimeString()
        this.state = {
            time: date
        }
    }
    getTimeString() {
        const date = new Date(Date.now()).toLocaleString();
        return date;
    }
    componentDidMount() {
        const _this = this;
        this.timer = setInterval(function () {
            var date = _this.getTimeString();
            _this.setState({
                time: date
            })
        }, 1000)
    }
    render() {
        return (
            <div>
                <h1 className="section-title">React Clock</h1>
                <hr ClassName="explanation" />
                <p>{this.state.time}</p>
            </div>
        )
    }
}