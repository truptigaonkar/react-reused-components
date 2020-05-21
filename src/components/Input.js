import React, {useState} from "react";
import './Input.styles.css';

function Input(props) {
  const [inputType] = useState(props.type)
  const [inputValue, setInputValue] = useState('')
  const [placeholder] = useState(props.placeholder)
  const {label, min, max, defaultValue, disabled} = props;

  function handleChange(event){
    setInputValue(event.target.value);
    if(props.onChange) props.onChange(inputValue)
  }
  return (
    <div style={{display:'flex'}}>
    <label for="inputid" style={{margin:'10px'}}>{label}</label>
      <input type={inputType} value={inputValue} placeholder={placeholder} name="input-form" onChange={handleChange} disabled={disabled} defaultValue={defaultValue} min={min} max={max} id="inputid"/>
      </div>
  );
}

export default Input;