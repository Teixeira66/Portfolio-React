import React from 'react';
import './App.css';
import Navbar from "./components";
import BackgroundVideo from './components/Background';




class App extends React.Component {
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

