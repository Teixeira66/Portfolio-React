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

/*function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }

 // find a way to tag diferent styles for the main project

 // one way could be getelementby.... and tag and we select give it a style black /white and thats it


 
 //see this aproach and understand if i could use it
 const RightNav = () => {
  return (
    <ul>
      <li>Home</li>
      <li>About Us</li>
      <li>Contact Us</li>
      <li>Sign In</li>
      <li>Sign Up</li>
    </ul>
  )
}*/
