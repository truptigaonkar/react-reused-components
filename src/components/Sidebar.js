/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Sidebar.styles.css';

const Sidebar = (props) => {
    const{header, tab1, tab2, tab3, tab4, tab5, tab6, tab7, src}=props;
  return (
    <div>
      <input type='checkbox' id='check' />
      <label for='check'>
        <div id='btn'>
          <div className='hamburger'> </div>
          <div className='hamburger'> </div>
          <div className='hamburger'> </div>
        </div>
        <div id='cancel'>X</div>
      </label>
      <div class='sidebar'>
        <header>{header}</header>
        <ul>
          <li><a href='#'>{tab1}</a></li>
          <li><a href='#'>{tab2}</a></li>
          <li><a href='#'>{tab3}</a></li>
          <li><a href='#'>{tab4}</a></li>
          <li><a href='#'>{tab5}</a></li>
          <li><a href='#'>{tab6}</a></li>
          <li><a href='#'>{tab7}</a></li>
        </ul>
      </div>
      <section
        style={{  
          backgroundImage: "url(" + src + ")",
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      >
        </section>
    </div>
  );
};

export default Sidebar;
