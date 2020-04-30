import React from 'react';
import './Card.styles.css';
import { Button } from './Button';

const Card = (props) => {
    const {productTitle, productPrice, src, alt, children, onClick  } = props;
  return (
    <div className='product'>
      <div>
        <img
          className='product-image'
          src={src}
          alt={alt}
        />
      </div>
      <div className='product-title'>{productTitle}</div>    
      <div className='product-price'>{productPrice} SEK</div>
      <Button buttonStyle="btn--dark--solid" buttonSize="block" onClick={onClick}>{children}</Button>
    </div>
  );
};

export default Card;
