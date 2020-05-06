/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Navbar.styles.css';

const Navbar = (props) => {
  const {header, tab1, tab2, tab3, tab4, navbarStyle} = props;
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
		  <h1 className="logo"><a href="#">{header}</a></h1>
      <ul className="main-nav">
          <li><a href="#">{tab1}</a></li>
          <li><a href="#">{tab2}</a></li>
          <li><a href="#">{tab3}</a></li>
          <li><a href="#">{tab4}</a></li>
      </ul>
	  </header> 
  );
};

export default Navbar;
