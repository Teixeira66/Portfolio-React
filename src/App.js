import React, { Component } from 'react';
import './App.css';
import NavBar from './components/Navbar/Navbar';
import BackgroundVideo from './components/Background';




class App extends Component {
  render () {
    return (
      <div>
        <Navbar/>
        <div>
        <BackgroundVideo/>
        </div>
      </div>
    )
  }
}

export default App;

