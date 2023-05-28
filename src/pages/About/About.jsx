import React from 'react';
import './About.css';
import Member from './Member/Member';

const About = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url('./asset/images/slogan.jpg')`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          height: '700px',
          position: 'relative',
          backgroundPosition: 'center',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div className="about">
          <h1>ACE-IT</h1>
          <p>
            ACE-IT là nhóm 3 của mentor Thiện được Mr.Pương thành lập khi học
            tập Mind-X
          </p>
        </div>
        <div className="blur"></div>
      </div>
      <div className="team">
        <h1>ACE-Team</h1>
        <div className="ace-team">
          <Member
            member="Mr.Phương"
            rule="Leader"
            imgmember="./asset/images/Phuong.png"
          />
          <Member
            member="Mr.Tùng Meo"
            rule="Member"
            imgmember="./asset/images/tung-mep.png"
          />
          <Member
            member="Mr.Thiện Quang"
            rule="Member"
            imgmember="./asset/images/Quang.jpg"
          />
          <Member
            member="Mr.Tùng Bi"
            rule="Member"
            imgmember="./asset/images/TungBi.png"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
