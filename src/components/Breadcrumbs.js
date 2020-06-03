import React from 'react';
import './Breadcrumbs.styles.css';

const Breadcrumbs = (props) => {
  const { Tab1, Tab2, Tab3, Tab4, Tab5, Tab6, Tab7, Tab8, Tab9, Tab10, } = props;

  return (
    <ul className='breadcrumb'>
      <li><a href='/'>Home</a></li>
      <li><a href={`${Tab1}`}>{Tab1}</a></li> 
      <li><a href={`${Tab2}`}>{Tab2}</a></li>
      <li><a href={`${Tab3}`}>{Tab3}</a></li>
      <li><a href={`${Tab4}`}>{Tab4}</a></li>
      <li><a href={`${Tab5}`}>{Tab5}</a></li>
      <li><a href={`${Tab6}`}>{Tab6}</a></li>
      <li><a href={`${Tab7}`}>{Tab7}</a></li>
      <li><a href={`${Tab8}`}>{Tab8}</a></li>
      <li><a href={`${Tab9}`}>{Tab9}</a></li>
      <li><a>{Tab10}</a></li>
    </ul>
  );
};

export default Breadcrumbs;
