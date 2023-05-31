import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { MdSecurity } from "react-icons/md";
import { TbTruckDelivery, TbReplace } from "react-icons/tb";
import MyImage from "../components/MyImage";
import PageNavigation from "../components/PageNavigation";
import { Container } from "../styles/Container";
import FormatPrice from "../Helpers/FormatPrice";
import Star from "../components/Star";
import AddToCart from "../components/AddToCart";
import data from "../contexts/data";
import { useProductContext } from "../contexts/ProductContext";
import RatingForm from "../components/RatingForm/RatingForm";
import { Helmet } from 'react-helmet';
import RatingSummary from "../components/RatingSummary/RatingSummary";

const SingleProduct = () => {
  const {
    getSingleProduct,
    isSingleLoading,
    singleProduct = {},
  } = useProductContext();
  const { id } = useParams();

  const {
    id: productId,
    name,
    company,
    price,
    description,
    sizes,
    category,
    stock,
    stars,
    reviews,
    image,
    images,
    colors,
  } = singleProduct;

  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [email, setEmail] = useState("");
  const [activeTab, setActiveTab] = useState("description");

  const scrollToTopRef = useRef(null);

  useEffect(() => {
    const getProduct = () => {
      if (singleProduct.id !== id) {
        const product = data.find((item) => item.id === id);
        if (product) {
          getSingleProduct(product.id);
        }
      }
    };
    getProduct();

    scrollToTopRef.current.scrollIntoView({ behavior: "smooth" });
  }, [id, getSingleProduct, singleProduct]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (

    <Wrapper ref={scrollToTopRef}>
      <Container className="container">
        <div className="grid grid-two-column">
          <div className="product_images">
            <MyImage imgs={images} />
          </div>

          <div className="product-data">
            <h2>{name}</h2>
            {/* <Star stars={stars} reviews={reviews} /> */}

            <p className="product-data-price">
              Giá gốc:
              <del>
                <FormatPrice price={price + 20000} />
              </del>
            </p>
            <p className="product-data-price product-data-real-price">
              Giá khuyến mại: <FormatPrice price={price} />
            </p>
            
            <div className="product-data-warranty">

              {/* <div className="product-warranty-data">
                  <TbTruckDelivery className="warranty-icon" />
                  <p>Giao tận tay</p>
                </div> */}

              <div className="product-warranty-data">
                <TbReplace className="warranty-icon" />
                <p>30 ngày đổi trả free</p>
              </div>

              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon" />
                <p>Vận chuyển nhanh nhất</p>
              </div>

              <div className="product-warranty-data">
                <MdSecurity className="warranty-icon" />
                <p>Bảo hành tận tình</p>
              </div>
            </div>

            <div className="product-data-info">
              <p>
                Available:
                <span> {stock > 0 ? "In Stock" : "Not Available"}</span>
              </p>
              <p>
                ID : <span> {productId} </span>
              </p>
              <p>
                Brand :<span> {company} </span>
              </p>
            </div>
            <hr />
            {stock > 0 && <AddToCart product={singleProduct} />}
          </div>
        </div>
        <div className="tab-container">
          <div
            className={`tab ${activeTab === "description" ? "active" : ""}`}
            onClick={() => handleTabChange("description")}
          >
            Mô tả
          </div>
          <div
            className={`tab ${activeTab === "reviews" ? "active" : ""}`}
            onClick={() => handleTabChange("reviews")}
          >
            Đánh giá
          </div>
        </div>

        {/* {activeTab === "description" && (
          <div className="tab-content">
            <p>{description}</p>
          </div>
        )} */}

        {activeTab === "description" && (
          <div className="tab-content" dangerouslySetInnerHTML={{ __html: description }} />
        )}




        {activeTab === "reviews" && (
          <div className="tab-content">
            <RatingForm
              rating={rating}
              setRating={setRating}
              review={review}
              setReview={setReview}
              customerName={customerName}
              setCustomerName={setCustomerName}
              email={email}
              setEmail={setEmail}
            />
          </div>
        )}

      </Container>
    </Wrapper>
  );
};



const Wrapper = styled.section`

.tab-container {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
}

.tab {
  font-size: 1.6rem;
  font-weight: bold;
  cursor: pointer;
  padding: 1rem 2rem;
  margin-right: 1rem;
  color: ${({ theme }) => theme.colors.pinkw};
  background-color: ${({ theme }) => theme.colors.lightPink};
  border: 1px solid ${({ theme }) => theme.colors.ư};
  border-radius: 0.5rem;
  width:200px;
  &:hover {
    background-color: ${({ theme }) => theme.colors.pinkw};
    color: ${({ theme }) => theme.colors.white};
  }

  &.active {
    background-color: ${({ theme }) => theme.colors.pinkw};
    color: ${({ theme }) => theme.colors.white};
    width:200px;
  }
}

.tab-content {
  margin-top: 2rem;
}
.tab-content h3 {
  color: ${({ theme }) => theme.colors.pinkw};
  font-size: 20px;
}

  .container {
    padding: 3rem;
    zoom: 80%;
  }

  .product_images {
    display: flex;
    align-items: center;
  }

  .product-data {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 2rem;
    color: ${({ theme }) => theme.colors.pinkw};

    .product-data h2 {
      color: ${({ theme }) => theme.colors.pinkw};
      font-size: 20px;
    }
   

    .product-data-warranty {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #ccc;
      margin-bottom: 1rem;

      .product-warranty-data {
        text-align: center;

        .warranty-icon {
          background-color: rgba(220, 220, 220, 0.5);
          border-radius: 50%;
          width: 4rem;
          height: 4rem;
          padding: 0.6rem;
        }
        p {
          font-size: 1.4rem;
          padding-top: 0.4rem;
        }
      }
    }

    .product-data-price {
      font-weight: bold;
    }
    .product-data-real-price {
      color: ${({ theme }) => theme.colors.pinkw};
    }
    .product-data-info {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      font-size: 1.8rem;

      span {
        font-weight: bold;
      }
    }

    hr {
      max-width: 100%;
      width: 90%;
      /* height: 0.2rem; */
      border: 0.1rem solid #000;
      color: red;
    }
  }

  .product-images {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .page_loading {
    font-size: 3.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 0 2.4rem;
  }
}`;

export default SingleProduct;
