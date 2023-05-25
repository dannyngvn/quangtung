import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './About';
// import Home from "./Home";
import HomePage from './components/HomePage/HomePage';
import Products from './Products';
import Contact from './Contact';
import Cart from './Cart';
import SingleProduct from './SingleProduct';
import ErrorPage from './ErrorPage';
import { GlobalStyle } from './GlobalStyle';
import { ThemeProvider } from 'styled-components';
import Header from './components/Header/Header';
import MenuModal from './components/Header/MenuModal/MenuModal';
import LoginPage from './components/Regester/Login';

// import Footer from "./components/Footer";

const App = () => {
  const theme = {
    colors: {
      heading: '#d77da0',
      text: '#FFC0CB',
      white: '#fff',
      black: ' #212529',
      helper: '#d77da0',
      pinkw: '#d77da0',

      // heading: "rgb(24 24 29)",
      // text: "#FFC0CB",
      // white: "#fff",
      // black: " #212529",
      // helper: "#8490ff",
      // pinkw: "RGB(255, 20, 147)",

      bg: 'rgba(255, 240, 245)',
      footer_bg: '#0a1435',
      btn: 'rgb(254,205,165)',
      border: 'rgba(98, 84, 243, 0.5)',
      hr: '#ffffff',
      gradient:
        'linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)',
      shadow:
        'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;',
      shadowSupport: ' rgba(0, 0, 0, 0.16) 0px 1px 4px',
    },
    media: {
      mobile: '768px',
      tab: '998px',
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyle />
        <Header imgurl="./asset/images/logo-png.png" />
        <MenuModal />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/singleproduct/:id" element={<SingleProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
        {/* {/* <Footer /> */}
      </Router>
    </ThemeProvider>
  );
};

export default App;
