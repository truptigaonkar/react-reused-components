import React, { useState } from 'react';
import './Textfield.styles.css';

const Textfield = (props) => {
  const { type, label } = props;
  const [state] = useState(true);
  const [text, updateText] = useState('');

  function handleOnChange(e) {
    updateText(e.target.value);
  }

  return (
    <>
      <div className='input-container'>
        {state ? (
          <input onChange={handleOnChange} required />
        ) : text ? (
          <input
            type={type}
            onChange={handleOnChange}
            className='input__active'
            required
          />
        ) : (
          <input type={type} xonChange={handleOnChange} required />
        )}
        <label className='input-label'>
          <span className='title-placeholder'>{label}</span>
        </label>
      </div>
    </>
  );
};

export default Textfield;