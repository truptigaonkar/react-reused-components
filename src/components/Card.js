import React from 'react';
import './Card.styles.css';
import { Button } from './Button';

const Card = (props) => {
    const {productTitle, productPrice, src, alt, children} = props;
  return (
    <div className='product'>
      <p>
        <img
          className='product-image'
          src={src}
          alt={alt}
        />
      </p>
      <p className='product-title'>{productTitle}</p>    
      <p className='product-price'>{productPrice} SEK</p>
      <Button buttonStyle="btn--dark--solid" buttonSize="block">{children}</Button>
    </div>
  );
};

export default Card;
