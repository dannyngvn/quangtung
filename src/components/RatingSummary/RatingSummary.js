import React from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import './RatingSummary.css';

const RatingSummary = ({ reviews }) => {
  const averageRating = reviews.length > 0
    ? reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length
    : 0;

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 1; i <= fullStars; i++) {
      stars.push(
        <FaStar
          key={i}
          color="#ffc107"
          size={25}
        />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <FaStarHalfAlt
          key={stars.length + 1}
          color="#ffc107"
          size={25}
        />
      );
    }

    while (stars.length < 5) {
      stars.push(
        <FaStar
          key={stars.length + 1}
          size={25}
          color="transparent"
          className="outline-star"
        />
      );
    }

    return stars;
  };

  return (
    <div>
      
      <h3>{renderStars(averageRating)}</h3>
      
      {reviews.map((review, index) => (
        <div key={index}>
          <p>Name: {review.name}</p>
          <p>Đánh giá: {renderStars(review.rating)}</p>
          <p>Nhận xét: {review.review}</p>
        </div>
      ))}
    </div>
  );
};

export default RatingSummary;