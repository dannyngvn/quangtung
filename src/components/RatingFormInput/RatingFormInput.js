import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import "./RatingFormInput.css"
const RatingFormInput = ({
  rating,
  handleRatingChange,
  review,
  handleReviewChange,
  name,
  handleNameChange,
  email,
  handleEmailChange
}) => {
  const [hoverRating, setHoverRating] = useState(0);

  const handleStarClick = (index) => {
    handleRatingChange({ target: { value: index } });
  };

  const handleMouseEnter = (index) => {
    updateHoverRating(index);
  };

  const handleMouseLeave = () => {
    updateHoverRating(0);
  };

  const renderStars = () => {
    const stars = [];
    const j=1;
    for (let i = j; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          onClick={() => handleStarClick(i)}
          onMouseEnter={() => handleMouseEnter(i)}
          onMouseLeave={handleMouseLeave}
        >
          <FaStar
            className="star"
            color={(hoverRating >= i || rating >= i) ? '#ffc107' : '#e4e5e9'}
            size={25}
          />
        </span>
      );
    }
    return stars;
  };

  const updateHoverRating = (value) => {
    setHoverRating(value);
  };
  

  return (
    <div className="rating-form">
      <div>Đánh giá của bạn <span style={{ color: "red" }}>*</span></div><br></br>
      <div className="rating-stars">{renderStars()}</div>
      <div>
        <label>Bình luận<span style={{ color: "red" }}>*</span>:</label><br></br>
        <textarea cols="46" rows="3" value={review} onChange={handleReviewChange} required />
      </div>
      <div className='comment-form-info'>
        <div className='comment-form-name'>
          <label>Họ và tên<span style={{ color: "red" }}>*</span>:</label><br></br>
          <input type="text" value={name} onChange={handleNameChange} required />
        </div>
        <div className='comment-form-email'>
          <label>Email<span style={{ color: "red" }}>*</span>:</label><br></br>
          <input type="email" value={email} onChange={handleEmailChange} required />
        </div>
      </div>
    </div>
  );
};

export default RatingFormInput;