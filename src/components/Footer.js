import React from 'react';
import styled from '@emotion/styled';

const Footer = (props) => {
  const { children, footerStyle } = props;

  //CSS in JS
  const Footer = styled.footer`
    padding: 1.6rem 0rem;
    width: 100%;
    text-align: center;
  `;

  const FooterText = styled.p`
    font-family: Corbel;
    color: #f5f2f1;
    font-weight: 400;
    font-size: 16px;
    width: 10%;
    display: inline-block;
  `;

  const STYLES = [
    'btn--primary--solid',
    'btn--secondary--solid',
    'btn--warning--solid',
    'btn--danger--solid',
    'btn--success--solid',
  ];

  const checkFooterStyle = STYLES.includes(footerStyle) ? footerStyle : STYLES[0];

  return (
    <>
      <Footer  className={`btn ${checkFooterStyle}`}>
        <FooterText>{children}</FooterText>
      </Footer>
    </>
  );
};

export default Footer;
