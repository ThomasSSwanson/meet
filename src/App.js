import React, { Component } from 'react';

import './App.scss';
import './nprogress.css';
import EventList from './EventList';
import CitySearch from './CitySearch'
import NumberOfEvents from './NumberOfEvents'
import WelcomeScreen from './WelcomeScreen';
import EventGenre from './EventGenre'
import { getEvents, extractLocations, limitEvents, checkToken, getAccessToken } from './api';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

class App extends Component {
  state = {
    events: [],
    locations: [],
    eventListSize: 15,
    limitedList: [],
    showWelcomeScreen: undefined
  }

  async componentDidMount() {
    this.mounted = true;
    const accessToken = localStorage.getItem('access_token');
    const isTokenValid = (await checkToken(accessToken)).error ? false :
      true;
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get("code");
    this.setState({ showWelcomeScreen: !(code || isTokenValid) });
    if ((code || isTokenValid) && this.mounted) {
      getEvents().then((events) => {
        if (this.mounted) {
          let limitedList = limitEvents(events, this.state.eventListSize);
          this.setState({ events, locations: extractLocations(events), limitedList: limitedList });
        }
      });
    }
  }
    

  componentWillUnmount(){
    this.mounted = false;
  }

  updateEvents = (location) => {
    getEvents().then((events) => {
        const locationEvents = (location === 'all' || location === '') ?
            events :
            events.filter((event) => event.location === location);
        let limitedList = limitEvents(locationEvents, this.state.eventListSize);
        this.setState({
            events: locationEvents,
            limitedList: limitedList
        });
    });
  }

  updateListSize = (number) => {
    let limitedList = limitEvents(this.state.events, number);
    this.setState({
        eventListSize: number,
        limitedList: limitedList
    });
}

  getData = () => {
    const {locations, events} = this.state;
    const data = locations.map((location)=>{
      const number = events.filter((event) => event.location === location).length
      const city = location.split(', ').shift()
      return {city, number};
    })
    return data;
  };

  render() {
    if (this.state.showWelcomeScreen === undefined) return <div className="App" />

    let { limitedList } = this.state;

    return (
      <div className='App'>
        <WelcomeScreen showWelcomeScreen={this.state.showWelcomeScreen} getAccessToken={() => { getAccessToken() }} />
        <h4>Explore upcoming events in Web Development from around the world!</h4>
        <h4>Choose a city to get a list of events and popularity charts!</h4>
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
        <NumberOfEvents number={this.state.eventListSize} updateListSize={this.updateListSize} />
        <h4>Events in each city</h4>
        <div className="grid-container">
					<div className="data-vis-wrapper">
            <EventGenre events={this.state.events} />
						<ResponsiveContainer height={400}>
							<ScatterChart
								margin={{
									top: 20,
									right: 20,
									bottom: 20,
									// left: 20,
								}}
							>
								<CartesianGrid />
								<XAxis type="category" dataKey="city" name="city" />
								<YAxis type="number" dataKey="number" name="number of events" allowDecimals={false} />
								<Tooltip cursor={{ strokeDasharray: "3 3" }} />
								<Scatter data={this.getData()} fill="#8884d8" />
							</ScatterChart>
						</ResponsiveContainer>
            </div>
            </div>
        <EventList events={limitedList} eventListSize={this.state.eventListSize} />
        
      </div>
    );
  }
}


export default App;
