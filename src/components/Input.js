import React, {useState} from 'react';
import './Input.styles.css';

const Input = (props) => {
  const [inputValue, setInputValue] = useState('')
  const{type, label, disabled}=props;

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
      />
      <label htmlFor='inputId' className='form-label'>
        {label}
      </label>
    </form>
  );
};

export default Input;
