/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './Sidebar.styles.css';

const Sidebar = (props) => {
    const{header, Tab1, Tab2, Tab3, Tab4, Tab5, Tab6, Tab7, src}=props;
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
        <Router>
        <header>{header}</header>
        <ul>
          <li><Link to={`${Tab1}`}>{Tab1}</Link></li>
          <li><Link to={`${Tab2}`}>{Tab2}</Link></li>
          <li><Link to={`${Tab3}`}>{Tab3}</Link></li>
          <li><Link to={`${Tab4}`}>{Tab4}</Link></li>
          <li><Link to={`${Tab5}`}>{Tab5}</Link></li>
          <li><Link to={`${Tab6}`}>{Tab6}</Link></li>
          <li><Link to={`${Tab7}`}>{Tab7}</Link></li>
        </ul>
        <Route exact path={`${Tab1}`} component={Tab1} />
        <Route path={`${Tab2}`} component={Tab2} />
        <Route path={`${Tab3}`} component={Tab3} />
        <Route path={`${Tab4}`} component={Tab4} />
        <Route path={`${Tab5}`} component={Tab5} />
        <Route path={`${Tab6}`} component={Tab6} />
        <Route path={`${Tab7}`} component={Tab7} />
        </Router>
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
