import React from 'react';
import './HeadingTitle.css';
const HeadingTitle = ({ title }) => {
  return (
    <div className="heading-title container">
      <div className="heading-line"></div>
      <h2 className="title">{title}</h2>
      <div className="heading-line"></div>
    </div>
  );
};

export default HeadingTitle;
