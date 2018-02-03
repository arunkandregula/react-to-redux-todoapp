import Link from './Link';
import React from 'react';
import './Footer.css';

const Footer = ()=>{
  return <div className="Footer">
    <Link to="/">All</Link>
    <Link to="/active">Active</Link>
    <Link to="/complete">Complete</Link>
  </div>;
}

export default Footer;