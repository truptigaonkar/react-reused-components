import React from 'react';
import './Footer.styles.css';

const Footer = (props) => {
  const { children, footerStyle } = props;

  const STYLES = [
    'footer--primary',
    'footer--secondary',
    'footer--warning',
    'footer--danger',
    'footer--success',
  ];

  const checkFooterStyle = STYLES.includes(footerStyle) ? footerStyle : STYLES[0];

  return (
    <>
      <footer className={`footer ${checkFooterStyle}`}>
        <p className="FooterText">{children}</p>
      </footer>
    </>
  );
};

export default Footer;
