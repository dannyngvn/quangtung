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

  useEffect(() => {
    const storedReviews = localStorage.getItem('reviews');
    if (storedReviews) {
      setReviews(JSON.parse(storedReviews));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('reviews', JSON.stringify(reviews));
  }, [reviews]);

  const { id } = useParams();

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

    const newReview = {
      id: id,
      rating: star,
      review: review,
      name: name,
      email: email
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
  };

  

  // Tính tổng số lượt đánh giá
let totalReviews;

{
  let currentIdReviews = 0;
  if (localStorage.reviews) {
    const storedReviews = JSON.parse(localStorage.reviews);
    currentIdReviews = storedReviews.reduce((total, review) => {
      if (review.id === id) {
        return total + 1;
      }
      return total;
    }, 0);
  }
  totalReviews = currentIdReviews + (data.find(item => item.id === id)?.review || 0);
}

console.log(totalReviews);
 

  return (
    <div className="reviewForm">
      <h2>Đánh giá và Bình luận</h2>
      <RatingSummary reviews={reviews} />
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
  );
};

export default RatingForm;

