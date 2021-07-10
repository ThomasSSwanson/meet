import React, { Component } from 'react';

import './App.css';
import './nprogress.css';
import EventList from './EventList';
import CitySearch from './CitySearch'
import NumberOfEvents from './NumberOfEvents'
import WelcomeScreen from './WelcomeScreen';
import { getEvents, extractLocations, limitEvents, checkToken, getAccessToken } from './api';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

class App extends Component {
  state = {
    events: [],
    locations: [],
    eventListSize: 15,
    limitedList: [],
    showWelcomeScreen: undefined
  }

  // componentDidMount() {
  //   this.mounted = true;
  //   getEvents().then((events) => {
  //     if (this.mounted) {
  //       let limitedList = limitEvents(events, this.state.eventListSize)
  //       this.setState({ 
  //         events, 
  //         locations: extractLocations(events),
  //         limitedList: limitedList });

  //     }
  //   });
  // }

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
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
        <NumberOfEvents number={this.state.eventListSize} updateListSize={this.updateListSize} />
        <h4>Events in each city</h4>
        <ScatterChart
          width={400}
          height={400}
          margin={{
            top: 20, right: 20, bottom: 20, left: 20,
          }}
        >
          <CartesianGrid />
          <XAxis type="category" dataKey="city" name="city" />
          <YAxis allowDecimals={false} type="number" dataKey="number" name="number of events" />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Scatter  data={this.getData()} fill="#8884d8" />
        </ScatterChart>
        <EventList events={limitedList} eventListSize={this.state.eventListSize} />
        <WelcomeScreen showWelcomeScreen={this.state.showWelcomeScreen} getAccessToken={() => { getAccessToken() }} />
      </div>
    );
  }
}


export default App;
