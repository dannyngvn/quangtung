import React, { useState, useEffect } from 'react';
import './CountdownTimer.css';

const CountdownTimer = ({ hours, minutes, seconds }) => {
  const [remainingTime, setRemainingTime] = useState(
    hours * 3600 + minutes * 60 + seconds
  );
  useEffect(() => {
    const interval = setInterval(() => {
      if (remainingTime > 0) {
        setRemainingTime(prevTime => prevTime - 1);
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [remainingTime]);

  const formatTime = time => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="countdown-sale">
      <h1 className="countdown-label">SALE – KHUYẾN MÃI</h1>
      <p className="countdown-detail">
        Rất nhiều sản phẩm đang được giảm giá và ưu đãi tại đây. Xin mời tham
        khảo!
      </p>
      <div className="countdown-container">
        <div className="countdown-item">
          <span className="countdown-value">
            {formatTime(remainingTime).split(':')[0]}
          </span>

          <span className="countdown-label">Hours</span>
        </div>
        <div className="countdown-item">
          <span className="countdown-value">
            {formatTime(remainingTime).split(':')[1]}
          </span>
          <span className="countdown-label">Minutes</span>
        </div>
        <div className="countdown-item">
          <span className="countdown-value">
            {formatTime(remainingTime).split(':')[2]}
          </span>
          <span className="countdown-label">Seconds</span>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
