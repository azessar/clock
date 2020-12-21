import React from 'react';

export default class StopWatch extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            time: 0,
            watchOn: false,
            lapTimes: []
        }
        this.startClock = this.startClock.bind(this)
        this.stopClock = this.stopClock.bind(this)
        this.resetClock = this.resetClock.bind(this)
        this.lap = this.lap.bind(this)
    }

    startClock(){
        this.setState({
            watchOn: true
        })
        this.count = setInterval(() => {
            this.setState({
              time: this.state.time + 1
            });
          }, 1000);
    }

    stopClock(){
        this.setState({
            watchOn: false
        })
        clearInterval(this.count);
    }

    resetClock(){
        this.setState({
            time: 0,
            lapTimes: []
        });
        this.stopClock();
    }

    lap(){
        this.setState({
            lapTimes: this.state.lapTimes.concat([this.state.time])
        })
    }

    render() {
        if (!this.state.lapTimes) {
            return null
        }
        const formattedTime = new Date(this.state.time * 1000).toISOString().substr(11, 8)
        return (
            <div className="part">
                <div>Part 2 + 3</div>
                {formattedTime}
                <div id="part-2-buttons">
                    {this.state.watchOn ?
                    <button onClick={this.stopClock}>Stop</button>
                    :
                    <button onClick={this.startClock}>Start</button>
                    }
                    <button onClick={this.resetClock}>Reset</button>
                    {this.state.time > 0 && this.state.watchOn ? 
                    <button onClick={this.lap}>Lap</button>
                    :
                    null
                    }
                    <ul>
                        {this.state.lapTimes.map((lapTime,i) => (
                            <li>{new Date(lapTime * 1000).toISOString().substr(11, 8)}</li>
                        ))}
                    </ul>
                </div>
            </div>
        )
    }
}