import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import RatingFormInput from '../RatingFormInput/RatingFormInput';
import RatingSummary from '../RatingSummary/RatingSummary';
import data from '../../contexts/data';
import './RatingForm.css';


const RatingForm = () => {
  const [star, setStar] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [review, setReview] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [reviews, setReviews] = useState([]);

  const [totalReviews, setTotalReviews] = useState(0);
  const [isLocalStorageUpdated, setIsLocalStorageUpdated] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const { id } = useParams();
  useEffect(() => {
    const storedReviews = localStorage.getItem(`reviews-${id}`);
    if (storedReviews) {
      setReviews(JSON.parse(storedReviews));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(`reviews-${id}`, JSON.stringify(reviews));
    setIsLocalStorageUpdated(true);
  }, [reviews, id]);


  useEffect(() => {
    if (isLocalStorageUpdated) {
      let reviewCount = data.find((item) => item.id === id)?.review || 0;

      const storedReviews = localStorage.getItem(`reviews-${id}`);
      if (storedReviews) {
        const reviewsData = JSON.parse(storedReviews);
        const currentIdReviews = reviewsData.reduce((total, review) => {
          if (review.id === id) {
            return total + 1;
          }
          return total;
        }, 0);
        reviewCount += currentIdReviews;
      }

      setTotalReviews(reviewCount);
    }
  }, [isLocalStorageUpdated, id]);

  const handleRatingChange = (event) => {
    setStar(Number(event.target.value));
  };

  const handleReviewChange = (event) => {
    setReview(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (star === 0) {
      alert("Vui lòng nhập số sao trước khi gửi đánh giá!");
      return;
    }
    
    const newReview = {
      id: id,
      rating: star,
      review: review,
      name: name,
      email: email,
    };

    const updatedReviews = [...reviews, newReview];

    const productIndex = data.findIndex((item) => item.id === id);
    if (productIndex !== -1) {
      const product = { ...data[productIndex] };
      const updatedStars = (product.stars * product.review + star) / (product.review + 1);
      product.stars = updatedStars.toFixed(1);
      product.review += 1;
      data[productIndex] = product;
    }

    setStar(0);
    setReview('');
    setName('');
    setEmail('');
    setReviews(updatedReviews);
    setShowNotification(true);

    setTimeout(() => {
      setShowNotification(false);
      window.location.reload();
    }, 2000);

    alert('Cảm ơn bạn đã đánh giá sản phẩm của chúng tôi, vui lòng tiếp tục mua sắm!');
  };

  return (
    <div className="reviewForm">
      <div>
      <h2>Đánh giá và Bình luận</h2>
      <p>Tổng số lượt đánh giá: {totalReviews}</p>
      <div className="rating-form">
        <form onSubmit={handleSubmit}>
          <RatingFormInput
            rating={star}
            hoverRating={hoverRating}
            handleRatingChange={handleRatingChange}
            review={review}
            handleReviewChange={handleReviewChange}
            name={name}
            handleNameChange={handleNameChange}
            email={email}
            handleEmailChange={handleEmailChange}
          />
          <button type="submit">Gửi đi</button>
        </form>
      </div>
      </div>
      <RatingSummary className="rating-summary" reviews={reviews} />
    </div>
  );
};

export default RatingForm;
