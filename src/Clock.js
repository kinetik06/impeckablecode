import React, { Component } from 'react'
import ReactDOM from 'react-dom'

export default class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            enddate: new Date(),
            startDate: new Date(2015,4,10,0,0,0,0),
            daysCoding: ''
        };
    }
    
    componentDidMount(){
        this.timerID = setInterval(
            () => this.getCodingTime(),1000
        );
    }

    componentWillUnmount(){
        clearInterval(this.timerID);
    }

    daysBetween(date1, date2) {
        const oneDay = 1000*60*60*24;

        var date1_ms = date1.getTime();
        var date2_ms = date2.getTime();

        var difference_ms = date2_ms - date1_ms;
        difference_ms = difference_ms/1000;
        var seconds = Math.floor(difference_ms % 60);
        difference_ms = difference_ms/60;
        var minutes = Math.floor(difference_ms % 60);
        difference_ms = difference_ms/60;
        var hours = Math.floor(difference_ms % 24);
        difference_ms = difference_ms/24;
        var days = Math.floor(difference_ms & 30);
        difference_ms = difference_ms/30;
        var months = Math.floor(difference_ms % 12);
        var years = Math.floor(difference_ms / 12);

        return years + ' years, ' + months + ' months, ' + days + ' days, ' + hours + ' hours, ' + minutes + ' minutes, ' + '& ' + seconds + ' seconds.';
    }

    getCodingTime(){

        this.setState({
            enddate:new Date(),
            daysCoding: this.daysBetween(this.state.startDate, this.state.enddate)
        });
    }
    render() {
        return (
            <div>
                <h3>Programming for:</h3>
                <h3>{this.state.daysCoding}</h3>
            </div>
        );
    }
}
ReactDOM.render(
    <Clock/>,
    document.getElementById('root')
);