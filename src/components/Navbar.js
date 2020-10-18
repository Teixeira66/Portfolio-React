import React from 'react';
import {Link} from 'react-router-dom';
          
        

const Navbar = props => (
  <div>
    <ul>
      <li><Link to='/'> Home </Link></li>
      <li><Link to='/Notes.js'> Notes </Link></li>
    </ul>
    <h1>Waiting to be done</h1>
    <h1>{props.title}</h1>
    <p>{props.text}</p>
  </div>
)

export default Navbar;


