import React, { Component } from 'react';
import SeasonDisplay from '../Components/SeasonDisplay';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      latitude: null,
      longitude: null,
      errorMessage: null
    };
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => { // Callback function to log position
        this.setState({
          latitude: position.coords.latitude, 
          longitude: position.coords.longitude
        })
      },
      (err) => {   // Error callback function
        this.setState({
          errorMessage: err.message
        })
      }
    );
  }

  render() {
    const { latitude, longitude, errorMessage} = this.state;

    return (
      errorMessage ? 
        <div>Error: {errorMessage}</div> 
      :
        <SeasonDisplay latitude={latitude} longitude={longitude} />
    );
  }
}

export default App;
