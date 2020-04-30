import React from 'react';
import './ProductDetails.styles.css';
import Input from './Input';
import Button from './Button';

const productDetails = (props) => {
    const {src, productTitle, productPrice, description, defaultValue, min, max, onClick}= props;
    return (
        
        <div className='Wrapper'>
        <div>
          <img className="ProductImg" src={src} alt="product details" />
        </div>
        <div className="ProductInfo">
          <div className="ProductText">
            <h1>{productTitle}</h1>
            <h2>{productPrice}</h2>
            <p>{description}</p>
          </div>
          <div className="ProductButtons">
            <div style={{  marginRight: '7px'}}>
              <Input 
                type="number"
                defaultValue={defaultValue}
                min={min}
                max={max}
              />
            </div>
            <Button buttonStyle="btn--danger--outline" buttonSize="large" onClick={onClick}>
              buy now
            </Button>
          </div>
        </div>
      </div>
      
    );
};

export default productDetails;