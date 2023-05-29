import './Banner.css';
import moon270 from './moon270.mp4';
import { NavLink, Link } from 'react-router-dom';
import Product from '../../Product';

const Banner = () => {
  return (
    <>
      <video src={moon270} autoPlay loop muted />
      <div className="conten-banner">
        <div className="btnn" id="btnn">
          <h3>
            <Link to="singleproduct/16">Shop Now</Link>
          </h3>
        </div>
      </div>
    </>
  );
};
export default Banner;
