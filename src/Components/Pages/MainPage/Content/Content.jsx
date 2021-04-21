import CalculatePrice from "./CalculatePrice/CalculatePrice";
import Carousel from "./Carousel/Carousel";
import styles from "./Content.module.css";
import OurProducts from "./OurProducts/OutProducts";
import OurTeam from "./OurTeam/OurTeam";
import Services from "./Services/Services";
import WhyWe from "./WhyWe/WhyWe";

function Content() {
  return (
    <>
      <Carousel />
      <Services />
      <WhyWe />
      <OurProducts />
      <OurTeam />
      <Services />
    </>
  );
}

export default Content;
