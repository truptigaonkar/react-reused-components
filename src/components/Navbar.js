/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Navbar.styles.css';

const Navbar = (props) => {
  const {header, Tab1, Tab2, Tab3, Tab4, Tab5, Tab6, Tab7, Tab8, Tab9, Tab10, navbarStyle} = props;
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
          <li><a href={`${Tab5}`}>{Tab5}</a></li>
          <li><a href={`${Tab6}`}>{Tab6}</a></li>
          <li><a href={`${Tab7}`}>{Tab7}</a></li>
          <li><a href={`${Tab8}`}>{Tab8}</a></li>
          <li><a href={`${Tab9}`}>{Tab9}</a></li>
          <li><a href={`${Tab10}`}>{Tab10}</a></li>
      </ul>
	  </header> 
  );
};

export default Navbar;
