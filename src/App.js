import React, { Component } from 'react';
import {Switch,Route,BrowserRouter} from 'react-router-dom';


import Home from './pages/home';
import Notes from './pages/notes';
import Work from './pages/work';

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


import './App.css';





class App extends Component {

  state = {
    home: {
      title: 'home component',
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
        <BrowserRouter>
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
        </BrowserRouter>
      );
  }
}



export default App;




    
  

