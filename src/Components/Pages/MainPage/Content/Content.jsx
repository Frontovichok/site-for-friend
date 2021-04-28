import PopUpWindow from "../../../PopUpWindow/PopUpWindow";
import Carousel from "./Carousel/Carousel";
import styles from "./Content.module.css";
import News from "./News/News";
import OurProducts from "./OurProducts/OutProducts";
import OurTeam from "./OurTeam/OurTeam";
import Reviews from "./Reviews/Reviews";
import Services from "./Services/Services";
import WhyWe from "./WhyWe/WhyWe";
import WorkingSteps from "./WorkingSteps/WorkingSteps";

function Content() {
  return (
    <>
      <Carousel />
      <Services />
      <WhyWe />
      <OurProducts />
      <OurTeam />
      <Reviews />
      <News />
      <WorkingSteps />
      <PopUpWindow />
    </>
  );
}

export default Content;
