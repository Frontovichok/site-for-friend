import RoofTypes from "./RoofTypes/RoofTypes";
import ProductsNavBar from "../../../ProductsNavBar/ProductsNavBar";
import ContactWithMe from "../../../ContactWithMe/ContactWithMe";
import styles from "./Content.module.css";
import Advaces from "./Advices/Advaces";

function Content() {
  return (
    <div className={styles.container}>
      <p>Кровельные материалы</p>
      <div className={styles.content}>
        <ProductsNavBar />
        <div>
          <RoofTypes />
          <Advaces />
          <div className={styles.contactWithMe}>
            <ContactWithMe />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
