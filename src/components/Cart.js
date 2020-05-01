import React from 'react';
import './Cart.styles.css';
import Button from './Button';

const Cart = (props) => {
  const { src, title, price, quantity, cartLength, onClick } = props;
  return (
    <div style={{ textAlign: 'center' }}>
      <div>
        Cart <span className='Badge'>{cartLength}</span>
      </div>
      <div className='Container'>
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Price</th>
              <th>quantity</th>
              <th>Action</th>
              <th>Price By quantity</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img className='ImageCartItem' src={src} alt='Cart Item' />
              </td>
              <td>
                <b>{title}</b>
              </td>
              <td>{price} SEK</td>
              <td>
                <Button
                  buttonStyle='btn--warning--solid'
                  buttonSize='btn--ex'
                  onClick={onClick}
                >
                  +
                </Button>{' '}
                {quantity}{' '}
                <Button
                  buttonStyle='btn--warning--solid'
                  buttonSize='btn--ex'
                  onClick={onClick}
                >
                  -
                </Button>
              </td>
              <td>
                <Button buttonStyle='btn--danger--solid' onClick={onClick}>
                  X
                </Button>
              </td>
              <td>{price * quantity} SEK</td>
            </tr>
            <div style={{ padding: '15px' }}>
              <h2 className='CartTotalPrice'>
                <Button
                  buttonStyle='btn--primary--outline'
                  buttonSize='btn--md'
                >
                  <b>Total : </b>
                  {price * quantity}
                </Button>
              </h2>
              <Button
                type='button'
                buttonStyle='btn--danger--outline'
                buttonSize='btn--md'
                onClick={onClick}
              >
                Clear Cart
              </Button>
            </div>
          </tbody>
        </table>
      </div>
      <div style={{float: 'left'}}>
        <Button
            buttonStyle='btn--info--solid'
            onClick={onClick}
        >
            Continue shopping
        </Button>
      </div>
      <div style={{float: 'right'}}>
        <Button
            buttonStyle='btn--info--solid'
            onClick={onClick}
        >
            proceed to checkout
        </Button>
      </div>
    </div>
  );
};

export default Cart;
