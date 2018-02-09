import {Link} from 'react-router';
import React from 'react';
import './Footer.css';

const Footer = (props)=>{

  const activeStyle = {
    textDecoration: 'none',
    color: 'black',
    fontWeight: 'bold'
  };
  return <div className="Footer">
    <Link to="/" activeStyle={activeStyle}>All</Link>
    <Link to="/active" activeStyle={activeStyle}>Active</Link>
    <Link to="/complete" activeStyle={activeStyle}>Complete</Link>
  </div>;
}

export default Footer;