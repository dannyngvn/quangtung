import React from 'react';
import './HeadingTitle.css';
const HeadingTitle = ({ title }) => {
  return (
    <div className="container">
      <h3 class="title-comm ">
        <span class="title-holder">{title}</span>
      </h3>
    </div>
  );
};

export default HeadingTitle;
