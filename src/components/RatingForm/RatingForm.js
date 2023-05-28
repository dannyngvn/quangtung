import React, { useState, useEffect } from 'react';
import RatingFormInput from '../RatingFormInput/RatingFormInput';
import RatingSummary from '../RatingSummary/RatingSummary';
import './RatingForm.css';

const RatingForm = () => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [review, setReview] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // Lưu dữ liệu RatingForm vào localStorage
    const formData = {
      rating: rating,
      review: review,
      name: name,
      email: email
    };
    localStorage.setItem('ratingFormData', JSON.stringify(formData));
  }, [rating, review, name, email]);

  useEffect(() => {
    // Save form data to localStorage whenever it changes
    const formData = {
      rating: rating,
      review: review,
      name: name,
      email: email
    };
    localStorage.setItem('ratingFormData', JSON.stringify(formData));
  }, [rating, review, name, email]);

  const handleRatingChange = (event) => {
    setRating(Number(event.target.value));
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
      rating: rating,
      review: review,
      name: name,
      email: email
    };

    const updatedReviews = [...reviews, newReview];

    console.log('Đánh giá:', rating);
    console.log('Bình luận:', review);
    console.log('Họ và Tên:', name);
    console.log('Email:', email);

    setRating(0);
    setReview('');
    setName('');
    setEmail('');
    setReviews(updatedReviews);
  };

  return (
    <div className='reviewForm'>
      <h2>Đánh giá và Bình luận</h2>
      <RatingSummary reviews={reviews} />
      <div className='rating-form'>
        <form onSubmit={handleSubmit}>
          <RatingFormInput
            rating={rating}
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