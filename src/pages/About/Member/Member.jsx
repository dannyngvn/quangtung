import React from 'react';
import './Member.css';

const Member = ({ member, rule, imgmember }) => {
  return (
    <div className="member">
      <img className="member-img" src={imgmember} alt="Phương" />
      <h3>{member}</h3>
      <p>{rule}</p>
    </div>
  );
};

export default Member;
