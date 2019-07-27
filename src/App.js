import React, { Component } from 'react';
// import Clarifai from 'clarifai';
import Navigation from './components/Navigation/Navigation';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Particles from 'react-particles-js';
import './App.css';
import 'tachyons';

const Clarifai = require('clarifai');

const app = Clarifai.App({
  apiKey: '93defbfc22674af887d4fd5c3304303d'
});

const particlesOptions = {
  particles: {
    number: {
      value: 40,
      density: {
        enable: true,
        value_area : 800,
      }
    },
    line_linked: {
        shadow: {
          enable: true,
          color: "#3CA9D1",
          blur: 5
        }
      }
  }
}
class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
    }
  }
  onInputChange = (event) => {
    console.log(event.target.value);
  }
  onButtonSubmit = () => {
    console.log('click');
    app.models.predict("aa7f35c01e0642fda5cf400f543e7c40", "https://samples.clarifai.com/face-det.jpg").then(
      function(response) {
        // do something with response
        console.log(response);
      },
      function(err) {
        // there was an error
      }
    );
  }

  render() {
    return (
      <div className="App">
      <Particles className = "particles"
              params={{particlesOptions}}
            />
       <Navigation />
       <Logo />
       <Rank />
       <ImageLinkForm 
          onInputChange={this.onInputChange} 
          onButtonSubmit={this.onButtonSubmit} 
       />
        <FaceRecognition /> 
      </div>
    );
  }
}

export default App;
