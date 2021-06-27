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
            <input 
                type="number"
                className="number"
                placeholder="15"
                value={this.state.eventListSize}
                onChange={this.handleInputChange}

            />
            <ErrorAlert text={this.state.errorText} />
        </div>
    }
}

export default NumberOfEvents;