import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from '../../../context/data';
import FormatPrice from '../../../Helpers/FormatPrice';

const Slide = () => {
  const [slidesData, setSlidesData] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setSlidesData(data);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex === slidesData.length - 1 ? 0 : prevIndex + 1));
    }, 4000); // interval timeout
 
    return () => clearInterval(interval);
  }, [slidesData]);

  return (
    <Carousel activeIndex={activeIndex} onSelect={(index) => setActiveIndex(index)} interval={null}>
      {slidesData.map((slide, index) => (
        <Carousel.Item key={slide.id}>
          <h2 style={{ color: 'pink', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>HÀNG BÁN CHẠY</h2>
          <img className="d-block w-100" src={slide.image} alt={slide.name} />
          <Carousel.Caption>
            <h3>{slide.name}</h3>
            <p> Giá khuyến mại: {' '}
            <FormatPrice price={slide.price} /> 
            </p>
            <p>Sản phẩm: {slide.category}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Slide;






// import data from '../../../context/data';

// import React, { useState, useEffect } from 'react';
// import Carousel from 'react-bootstrap/Carousel';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const Slide = () => {
//   const slidesData = [
//     {
//       id: 1,
//       src: 'https://thamyoganamaste.com/wp-content/uploads/2023/03/z4184142392780_266e1e8d16e6c5e787763c36acf3db84.jpg',
//       alt: 'First slide',
//       productName: 'Product 1',
//       discountPrice: '$20',
//       currentPrice: '$15',
//     },
//     {
//       id: 2,
//       src: 'https://thamyoganamaste.com/wp-content/uploads/2023/02/z4108709343606_cb7fdbc3d80a3bed26d58e99caa4eba4.jpg',
//       alt: 'Second slide',
//       productName: 'Product 2',
//       discountPrice: '$25',
//       currentPrice: '$18',
//     },
//     {
//       id: 3,
//       src: 'https://thamyoganamaste.com/wp-content/uploads/2022/12/z3979614014365_757de9d27d2f0dfdf94e7202a707fbb0.jpg',
//       alt: 'Third slide',
//       productName: 'Product 3',
//       discountPrice: '$30',
//       currentPrice: '$22',
//     },
//   ];

//   const [activeIndex, setActiveIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveIndex((prevIndex) => (prevIndex === slidesData.length - 1 ? 0 : prevIndex + 1));
//     }, 4000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <Carousel activeIndex={activeIndex} onSelect={(index) => setActiveIndex(index)} interval={null}>
//       {slidesData.map((slide) => (
//         <Carousel.Item key={slide.id}>
//           <img className="d-block w-100" src={slide.src} alt={slide.alt} />
//           <Carousel.Caption>
//             <h3>{slide.productName}</h3>
//             <p>Discount Price: {slide.discountPrice}</p>
//             <p>Current Price: {slide.currentPrice}</p>
//           </Carousel.Caption>
//         </Carousel.Item>
//       ))}
//     </Carousel>
//   );
// };

// export default Slide;




