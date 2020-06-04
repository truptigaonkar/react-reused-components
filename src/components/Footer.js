import React from 'react';
import './Footer.styles.css';

const Footer = (props) => {
  const { children, footerStyle, footerFixed } = props;

  const STYLES = [
    'footer--primary',
    'footer--secondary',
    'footer--warning',
    'footer--danger',
    'footer--success',
    'footer--white',
    'footer--dark',
  ];
  const STYLES1 = ['footer--basic', 'footer--fixed'];

  const checkFooterStyle = STYLES.includes(footerStyle)
    ? footerStyle
    : STYLES[0];
  const checkFooterFixed = STYLES1.includes(footerFixed)
    ? footerFixed
    : STYLES1[0];

  return (
    <>
      <footer className={`footer ${checkFooterStyle} footer ${checkFooterFixed}`}>
        <p className='FooterText'>{children}</p>
      </footer>
    </>
  );
};

export default Footer;
