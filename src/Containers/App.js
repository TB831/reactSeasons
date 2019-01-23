import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      latitude: null,
      longitude: null
    };

    window.navigator.geolocation.getCurrentPosition(
      (position) => { // Callback function to log position
        this.setState({
          latitude: position.coords.latitude, 
          longitude: position.coords.longitude
        })
      },
      (err) => console.log(err)
    );
  }

  render() {
    const { latitude, longitude} = this.state;

    return (
      <div>
        <div>Latitude: {latitude}</div>
        <div>Longitude: {longitude}</div>
      </div>
    );
  }
}

export default App;
