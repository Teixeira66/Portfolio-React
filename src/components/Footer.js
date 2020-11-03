import React from 'react';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => (

 <div className="footer">
 <div className="footer__social">
    <p>&copy; 2020 Carlos Teixeira</p>
    <a href="https://github.com/Teixeira66/">
    <FaGithub size="30"  color="#F3904F"/></a>
    <a href="https://www.linkedin.com/in/carlos-teixeira-43288162/">
    <FaLinkedin size="30"  color="#F3904F"/></a>
  </div>
  </div>
        )
        
        

export default Footer;


      