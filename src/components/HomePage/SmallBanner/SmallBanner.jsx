import React from 'react';
import './SmallBanner';

const SmallBanner = props => {
  const { url, children } = props;
  return (
    <div
      className="small-banner"
      style={{
        background: `url("${url}")`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        height: 800,
        width: '100%',
        position: 'relative',
        // backgroundAttachment: 'fixed',
      }}
    >
      {children}
    </div>
  );
};

export default SmallBanner;
