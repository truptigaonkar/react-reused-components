import React from 'react';
import './Breadcrumbs.styles.css'

const Breadcrumbs = props => {
  const { children, alertStyle } = props;

  const STYLES = [
    'alert--primary',
    'alert--secondary',
    'alert--success',
    'alert--warning',
    'alert--danger',
    'alert--info',
    'alert--white',
    'alert--dark',
  ];

  const checkAlertStyle = STYLES.includes(alertStyle)
  ? alertStyle
  : STYLES[0];

  return (
    <>
        {
            <div className={`alert ${checkAlertStyle}`}>
                {children}
            </div>
        }
    </>
  );
};

export default Breadcrumbs;