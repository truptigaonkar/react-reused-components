/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Sidebar.styles.css';

const Sidebar = (props) => {
    const{header, Tab1, Tab2, Tab3, Tab4, Tab5, Tab6, Tab7, Tab8, Tab9, Tab10,src}=props;
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
      <div className='sidebar'>
        <header>{header}</header>
        <ul>
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