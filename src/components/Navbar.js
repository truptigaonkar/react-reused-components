/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Navbar.styles.css';

const Navbar = (props) => {
  const {header, Tab1, Tab2, Tab3, Tab4, navbarStyle} = props;
  const STYLES = [
    'navbar--primary',
    'navbar--secondary',
    'navbar--success',
    'navbar--warning',
    'navbar--danger',
    'navbar--dark',
  ];

  const checkNavbarStyle = STYLES.includes(navbarStyle)
  ? navbarStyle
  : STYLES[0];


  return (
    <header className={`alert ${checkNavbarStyle} header`}>
		  <h1 className="logo"><a href={`/`}>{header}</a></h1>
      <ul className="main-nav">
          <li><a href={`${Tab1}`}>{Tab1}</a></li>
          <li><a href={`${Tab2}`}>{Tab2}</a></li>
          <li><a href={`${Tab3}`}>{Tab3}</a></li>
          <li><a href={`${Tab4}`}>{Tab4}</a></li>
      </ul>
	  </header> 
  );
};

export default Navbar;
