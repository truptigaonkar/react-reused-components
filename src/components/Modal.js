import React, {useState} from 'react';
import './Modal.styles.css';
import Button from './Button';

const Modal = (props) => {
  const { closeModal } = props;

  return (
      <>
    <div className='overlay'>
      <div className='content'>
        <div style={{ float: 'right' }}>
          <Button 
            buttonStyle='btn--dark--outline' 
            onClick={closeModal}
          >
            X
          </Button>
        </div>
        {props.children}
      </div>
    </div>
    </>
  );
};

export default Modal;
