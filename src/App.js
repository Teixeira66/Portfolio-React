import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';


//import BackgroundVideo from './components/Background';

import Home from './pages/Home';
import Notes from './pages/Notes';
import Work from './pages/Work';

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";






//why the components dont work, and where to put the components??? pages and components??? 
//where should i pass the html?

import './App.css';


/*import Home from './pages/Home';
import Notes from './pages/Notes';
import Work from './pages/Work';*/



class App extends Component {

  state = {
    Home: {
      title: 'Home component',
      text: 'something extra about this component'
    },
    Notes: {
      title: 'Notes component',
      text: 'something extra about this component'
    },
    Work: {
      title: 'Work component',
      text: 'something yes, could be good'
    },
  }

  render() {
      return (
        <div className="App">
        <Navbar/>
        
          <Switch>
            <Route
              exact path='/'
              render={props =>
                <Home
                  {...props}
                  title={this.state.home.title}
                  text={this.state.home.text}
                />}
            />
            <Route path='/notes' component={Notes} />
            <Route path='/work' component={Work} />
            
          </Switch>
          
          <Footer/>
        </div>
      );
  }
}


export default App;
