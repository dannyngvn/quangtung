import HeroSection from "../components/HeroSection";
import { useProductContext } from "../contexts/ProductContext";

const About = () => {
  const { myName } = useProductContext();

  const data = {
    name: "AceIt Ecommerce",
  };

  return (
    <>
      {/* {myName} */}
      {/* <HeroSection myData={data} /> */}
    </>
  );
};

export default About;
