import React from 'react';
import './HeadingTitle.css';
const HeadingTitle = ({ title }) => {
  return (
    <h3 class="title-comm"><span class="title-holder">{title}</span></h3>
  );
};

export default HeadingTitle;
