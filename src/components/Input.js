import React, {useState} from 'react';
import './Input.styles.css';

const Input = (props) => {
  const [inputValue, setInputValue] = useState('')
  const{type, label, min, max, defaultValue, disabled}=props;

  function handleChange(event){
    setInputValue(event.target.value);
    if(props.onChange) props.onChange(inputValue)
  }

  return (
    <form>
      <input
        type={type}
        id='inputId'
        className='form-field'
        placeholder='type placeholder'
        onChange={handleChange}
        disabled={disabled}
        min={min}
        max={max}
        defaultValue={defaultValue}
      />
      <label htmlFor='inputId' className='form-label'>
        {label}
      </label>
    </form>
  );
};

export default Input;
