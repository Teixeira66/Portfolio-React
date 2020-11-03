import React, { Component } from 'react';
import {Switch,Route,BrowserRouter} from 'react-router-dom';





import Home from './pages/Home';
import Notes from './pages/Notes';
import Work from './pages/Work';

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";








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
    darkmode:{
      title: 'Work component',
      text: 'something yes, could be good'
    }
  }
  darkmode = dark => {
    this.setState({ dark });
  };
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
            <Route path='/Notes' component={Notes} />
            <Route path='/Work' component={Work} />
          </Switch>
          <Footer/>
        </div>
      
        </BrowserRouter>
      );
  }
}




export default App;




    
  

