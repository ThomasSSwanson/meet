import React, { Component } from 'react';
import { ErrorAlert } from './Alert'

class NumberOfEvents extends Component {
    constructor(props) {
        super(props);
        this.state = {
            eventListSize: props.number,
            errorText: ''
        }
    }

    handleInputChange = (event) => {
        const number = event.target.value
        if (number < 1 || number > 32) {
            this.setState({
                eventListSize: number,
                errorText: 'Please select a number between 1 and 32.'
            });
        } else {
            this.setState({
                eventListSize: number,
                errorText: ''
            });
        }
        this.props.updateListSize(number);
    }

    render() {
        return <div className='NumberOfEvents'>
            <ErrorAlert text={this.state.errorText} />
            <input 
                type="number"
                className="number"
                placeholder="Number of events"
                value={this.state.eventListSize}
                onChange={this.handleInputChange}
            />
        </div>
    }
}

export default NumberOfEvents;