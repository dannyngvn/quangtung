import React, { useState, useEffect } from 'react';
import './BackToTop.css';

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className={`back-to-top-button ${isVisible ? 'visible' : ''}`}>
      <i
        className="lni lni-chevron-up back-to-top-icon"
        onClick={scrollToTop}
        title="Lên Đầu Trang"
      ></i>
    </div>
  );
};

export default BackToTopButton;
