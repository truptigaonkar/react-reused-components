import React, {useState} from "react";

function Input(props) {
  const [inputType] = useState(props.type)
  const [inputValue, setInputValue] = useState('')
  const [placeholder] = useState(props.placeholder)

  function handleChange(event){
    setInputValue(event.target.value);
    if(props.onChange) props.onChange(inputValue)
  }
  return (
    <>
      <input type={inputType} value={inputValue} placeholder={placeholder} name="input-form" onChange={handleChange} class="inputclass"/>
    </>
  );
}

export default Input;