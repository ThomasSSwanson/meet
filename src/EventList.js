import React, { Component } from 'react';
import Event from './Event';
import { InfoAlert } from './Alert';

class EventList extends Component {

    state = {
        infoText: ''
    }

    
    render() {
        if (!this.props.events) {
            return (<div className="event-list"></div>)
        };
        const events = this.props.events;

        if (!navigator.onLine) {
            this.setState({ infoText: 'This list is not up to date please connect to the internet'});
        }

        return (
            
            <div className="event-list">
                <InfoAlert text={this.state.infoText} />
                <ul className="list">
                    {events.map(event => 
                        <li key={event.id}>
                            <Event event={event} />
                        </li>
                    )}
                </ul>
            </div>
        );
    }
}

export default EventList;