import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      latitude: null,
      longitude: null
    };
  }

  getGeolocation() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => console.log(position),  // Callback function to log position
      (err) => console.log(err)
    );
  }

  render() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => console.log(position),  // Callback function to log position
      (err) => console.log(err)
    );

    return (
      <div>Latitude: </div>
    );
  }
}

export default App;
