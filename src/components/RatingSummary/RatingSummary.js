import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import data from '../../contexts/data';
import './RatingSummary.css';




const RatingSummary = ({ reviews }) => {
  const { id } = useParams();
  const product = data.find((item) => item.id === id);

  const getLocalStorageRatingSummary = () => {
    const localStorageData = localStorage.getItem(`reviews-${id}`);
    return localStorageData ? JSON.parse(localStorageData) : [];
   
  };

  const ratingSummary = reviews.length > 0 ? reviews : getLocalStorageRatingSummary();
  const averageRating =
  ratingSummary.length > 0
    ? (ratingSummary.reduce((sum, review) => sum + review.rating, 0) + (product?.stars * product?.review)) /
      (ratingSummary.length + product?.review)
    : 0;

const renderStars = (rating) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  for (let i = 1; i <= fullStars; i++) {
    if (i <= 5) {
      stars.push(
        <FaStar
          key={i}
          color="#ffc107"
          size={25}
        />
      );
    }
  }

  if (hasHalfStar && stars.length < 5) {
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
    <div className="rating-summary">
      <p>TỔNG HỢP ĐÁNH GIÁ {renderStars(averageRating)}</p>
      <p>CHI TIẾT CÁC ĐÁNH GIÁ:</p>
      <hr />
      {ratingSummary.map((review, index) => (
        <div className="review-item" key={index}>
          <p>Name: {review.name}</p>
          <p>Đánh giá: {renderStars(review.rating)}</p>
          <p>Nhận xét: {review.review}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default RatingSummary;




