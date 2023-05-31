
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import FormatPrice from "../Helpers/FormatPrice";
import { Button } from "../styles/Button";
import { v4 as uuidv4 } from "uuid"

const ListView = ({ products }) => {
  return (
    <Wrapper className="section">
      <div className="container grid">
        {products.map((curElem) => {
          const { id, name, image, price, sizes, colors } = curElem;
          const key = uuidv4(); // Tạo giá trị duy nhất cho thuộc tính key
          return (
            <div className="card grid grid-two-column" key={key}>
              <figure>
                <img src={image} alt={name} />
              </figure>

              <div className="card-data">
                <h3>{name}</h3>
                <div className="card-data-price">
                  <div>
                    <span style={{ textDecoration: "line-through" }}>
                      Giá gốc:
                      {<FormatPrice price={price + 20000} />}
                    </span>
                    <hr/>
                  </div>
                    Giá khuyến mại:
                    <FormatPrice price={price} />
                  </div>

                {/* 
                <div className="dangerouslySetInnerHTML" style={{ color: 'black', fontSize: '0px' }}>
                <p dangerouslySetInnerHTML={{ __html: description.slice(0, 40) }} />
              </div> */}
            

                <NavLink to={`/singleproduct/${id}`} className="btn-main">
                  <Button className="btn">Chi tiết</Button>
                </NavLink>
              </div>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};





const Wrapper = styled.section`
  padding: 9rem 0;

  .container {
    max-width: 120rem;
  }
  .dangerouslySetInnerHTML {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    color: #000;
  }
  .grid {
    gap: 3.2rem;
  }

  figure {
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    transition: all 0.5s linear;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0%;
      height: 100%;
      background-color: rgba(255, 240, 245, 0.5);
      transition: all 0.2s linear;
      cursor: pointer;
    }
    &:hover::after {
      width: 100%;
    }
    &:hover img {
      transform: scale(1.2);
    }
    img {
      max-width: 90%;
      margin-top: 1.5rem;
      height: 20rem;
      transition: all 0.2s linear;
    }
  }

  .card {
    border: 0.1rem solid rgb(170 170 170 / 40%);

    .card-data {
      padding: 0 2rem;
    }

    h3 {
      margin: 2rem 0;
      font-weight: 300;
      font-size: 2.4rem;
      text-transform: capitalize;
      color: ${({ theme }) => theme.colors.pinkw};
    }
    .card-data-price {
      margin: 2rem 0;
      font-weight: 100;
      font-size: 1.2rem;
      color: ${({ theme }) => theme.colors.pinkw};
    }
    .btn {
      margin: 2rem 0;
      background-color: rgb(0 0 0 / 0%);
      border: 0.1rem solid RGB(255, 20, 147);
      display: flex;
      justify-content: center;
      align-items: center;
      color: RGB(255, 20, 147);

      &:hover {
        background-color: rgba(255, 240, 245);
      }

      &:hover a {
        color: #fff;
      }
      a {
        color: rgb(98 84 243);
        font-size: 1.4rem;
      }
    }

    .btn-main .btn:hover {
      color: #fff;
    }
  }
`;

export default ListView;