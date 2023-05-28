import React, { useState } from "react";
import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    
    const formData = new FormData(event.target);
    const formDataObject = Object.fromEntries(formData.entries());
    localStorage.setItem("formSubmission", JSON.stringify(formDataObject));

    setSubmitted(true);
  };

  const redirectDelay = 5000; // Độ trễ để điều hướng đến trang "/products"

  if (submitted) {
    // Hiển thị thông báo sau khi nhập form
    setTimeout(() => {
      window.location.href = "/products";
    }, redirectDelay);

    return (
      <Wrapper>
        <h2 className="common-heading">Contact us</h2>
        <p>Thank you so much for contacting us.</p>
        <p>You will be redirected to the products page shortly.</p>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <h2 className="common-heading">Contact us</h2>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d232.76417690027392!2d105.81895638494179!3d21.023608084835157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135abb200489bbf%3A0xa1708dcdb1cc9901!2zWMO0aSBCw6BuIFRo4budICggY2jDrW5oIGhp4buHdSAyMCBuxINtKQ!5e0!3m2!1svi!2s!4v1684978839937!5m2!1svi!2s"
        width="70%"
        height="550"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />

      <div className="container">
        <div className="contact-form">
  
          <form onSubmit={handleSubmit} className="contact-inputs">
          <input
            type="text"
            placeholder="Username"
            name="username"
            required
            autoComplete="off"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            autoComplete="off"
            required
          />

          <textarea
            name="message"
            cols="30"
            rows="10"
            required
            autoComplete="off"
            placeholder="Enter your message"
          ></textarea>

          <input type="submit" value="Send" />
        </form>
      </div>
    </div>
  </Wrapper>
);
};

export default Contact;

