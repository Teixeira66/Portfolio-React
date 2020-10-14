import React from 'react';
import {Link} from 'react-router-dom';


const Home = props => (
  <div>
    <ul>
      <li><Link to='/pages/notes'>Notes</Link></li>
      <li><Link to='/pages/work'>Work</Link></li>
    </ul>
    <h1>{props.title}</h1>
    <p>{props.text}</p>
  </div>
)

export default Home;