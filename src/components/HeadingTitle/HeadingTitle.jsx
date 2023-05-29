import React from 'react';
import './HeadingTitle.css';
const HeadingTitle = ({ title }) => {
  return (
    <div className="container">
      <h3 className="title-comm ">
        <span className="title-holder">{title}</span>
      </h3>
    </div>
  );
};

export default HeadingTitle;
