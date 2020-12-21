import React from 'react';
import moment from 'moment';

export default class Clock extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            time: '',
        }
    }

    componentDidMount(){
        setInterval(
            function() {
                this.setState({
                    time: moment().format('hh:mm:ss'),
                })
            }.bind(this),
            1000
        )
    }

    render() {
        return (
            <div className="part">
                <div>Part 1</div>
                {this.state.time}
            </div>
        )
    }
}

// call "moment" every second via setInterval

//part 2: clock is now a stop watch, button 1 is start/stop (reacts accordingly), button 2 is reset
//part 3: lap button, click it, logs time on right side of page