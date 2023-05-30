import React, { useState } from 'react';
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
      ? (ratingSummary.reduce((sum, review) => sum + review.rating, 0) + product?.stars * product?.review) /
      (ratingSummary.length + product?.review)
      : 0;

  const reviewsPerPage = 2; // Số lượng đánh giá hiển thị trên mỗi trang
  const [currentPage, setCurrentPage] = useState(1); // Trang hiện tại
  const totalPages = Math.ceil(ratingSummary.length / reviewsPerPage); // Tổng số trang

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const startIndex = (currentPage - 1) * reviewsPerPage;
  const endIndex = startIndex + reviewsPerPage;
  const displayedReviews = ratingSummary.slice(startIndex, endIndex);

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 1; i <= fullStars; i++) {
      if (i <= 5) {
        stars.push(<FaStar key={i} color="#ffc107" size={25} />);
      }
    }

    if (hasHalfStar && stars.length < 5) {
      stars.push(<FaStarHalfAlt key={stars.length + 1} color="#ffc107" size={25} />);
    }

    while (stars.length < 5) {
      stars.push(
        <FaStar key={stars.length + 1} size={25} color="transparent" className="outline-star" />
      );
    }

    return stars;
  };

  return (
    <div className="rating-summary">
      <p>TỔNG HỢP ĐÁNH GIÁ {renderStars(averageRating)}</p>
      <p>CHI TIẾT CÁC ĐÁNH GIÁ:</p>
      <hr />
      {displayedReviews.map((review, index) => (
        <div className="review-item" key={index}>
          <p>Họ và tên: {review.name}</p>
          <p>Đánh giá: {renderStars(review.rating)}</p>
          <p>Nhận xét: {review.review}</p>
          <hr />
        </div>
      ))}
      <div className="pagination">
        <button onClick={goToPreviousPage} disabled={currentPage === 1}>
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => goToPage(index + 1)}
            className={currentPage === index + 1 ? 'active' : ''}
          >
            {index + 1}
          </button>
        ))}
        <button onClick={goToNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default RatingSummary;