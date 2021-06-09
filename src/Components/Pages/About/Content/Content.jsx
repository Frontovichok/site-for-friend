import { NavLink } from "react-router-dom";
import styles from "./Content.module.css";
import ControlledCarousel from "./Carousel/Carousel";
import ContactWithMe from "../../../Common/ContactWithMe/ContactWithMe";
import OurTeam from "../../../Common/OurTeam/OurTeam";
import Reviews from "../../../Common/Reviews/Reviews";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";
import aboutCompanyData from "../../../../aboutCompany.json";

function Content() {
  let aboutCompany = aboutCompanyData.aboutCompany;

  return (
    <div>
      <section className="section">
        <div className="breadcrumb">
          <NavLink to="/">Главная</NavLink>
          <p>&nbsp; / &nbsp;</p>
          <p>О компании</p>
        </div>
        <div className={styles.contentContainer}>
          <ControlledCarousel />
          <div className={styles.blocksContainer}>
            {aboutCompany.map((block, i) => (
              <div key={i} className={styles.block}>
                <div className={styles.imageContainer}>
                  <h2 className={styles.titleMobile}>{block.title}</h2>
                  {/* <img src={block.image} /> */}
                  <LazyLoadImage
                    alt="about"
                    effect="opacity"
                    src={block.image}
                  />
                </div>
                <div className={styles.textContainer}>
                  <h2 className={styles.titleDesktop}>{block.title}</h2>
                  <p className={styles.description}>{block.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.ourTeamContainer}>
            {/* <OurTeam /> */}
            <OurTeam />
          </div>
          <Reviews />
          <div className={styles.contactWithMeContainer}>
            <ContactWithMe />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Content;
