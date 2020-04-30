import React from 'react';
import './Header.styles.css';
import { Button } from './Button';

const Header = (props) => {
  const { children, src, alt, heading, description, mainHeading } = props;
  return (
    <header>
      <img className='header-bg' src={src} alt={alt} />
      <div className='header-content'>
        <p className='heading'>{heading}</p>
        <h1 className="main-heading">
          {mainHeading}
        </h1>
        <p className='description'>{description}</p>
        <Button buttonStyle='btn--danger--solid' buttonSize='large'>{children}</Button>
      </div>
    </header>
  );
};

export default Header;
