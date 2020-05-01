import React from 'react';
import './Header.styles.css';
import { Button } from './Button';

const Header = (props) => {
  const { children, src, alt, heading, description, mainHeading, onClick } = props;
  return (
    <header>
      <img className='header-bg' src={src} alt={alt} />
      <div className='header-content'>
        <div className='heading'>{heading}</div>
        <h1 className="main-heading">
          {mainHeading}
        </h1>
        <div className='description'>{description}</div>
        <Button buttonStyle='btn--danger--solid' buttonSize='large' onClick={onClick}>{children}</Button>
      </div>
    </header>
  );
};

export default Header;
