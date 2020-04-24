import React from 'react';
import './Button.styles.css';

const STYLES = [
  'btn--primary--solid',
  'btn--secondary--solid',
  'btn--warning--solid',
  'btn--danger--solid',
  'btn--success--solid',
  'btn--primary--outline',
  'btn--secondary--outline',
  'btn--warning--outline',
  'btn--danger--outline',
  'btn--success--outline',
];

const SIZES = ['small', 'large', 'block'];

export const Button = ({ children, disabled, type, onClick, buttonStyle, buttonSize, href }) => {
  const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;