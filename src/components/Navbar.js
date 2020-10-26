import React from 'react';
import {Link} from 'react-router-dom';
          
  

const Navbar = props => (
  <div className="navbar">
    <ul>
      <li><Link to='/'> Home </Link></li>
      <li><Link to='/Notes'> Notes </Link></li>
      <li><Link to='/Work'> Work </Link></li>
      <button onClick={() => this.darkmode("#030000")}> dark mode</button>
    </ul>
    <h1>{props.title}</h1>
    <p>{props.text}</p>
  </div>
)

export default Navbar;




