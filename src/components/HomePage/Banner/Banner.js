import "./Banner.css";
import moon270 from "./moon270.mp4";
import { NavLink } from "react-router-dom";
import Product from "../../Product";

const Banner = () => {
  return (
    <>
      <video src={moon270} autoPlay loop muted />
      <div className="conten-banner">
        <NavLink to="/products" state={{ element: "Products" }}>
          <div className="btnn" id="btnn">
            <h3>SHOP NOW</h3>
          </div>
        </NavLink>
      </div>
    </>
  );
};
export default Banner;
