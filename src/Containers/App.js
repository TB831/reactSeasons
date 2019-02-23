import React, { Component } from 'react';
import SeasonDisplay from '../Components/SeasonDisplay';
import Spinner from '../Components/Spinner';
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
    const message = "Please accept location request";

    if (errorMessage && !latitude) {
      return <div>Error: {errorMessage}</div>;
    }

    if (!errorMessage && latitude) {
      return <SeasonDisplay latitude={latitude} longitude={longitude} />;
    }

    return <Spinner message={message} />;
  }
}

export default App;
