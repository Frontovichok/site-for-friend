import styles from "./WhyWe.module.css";
import hammer from "./hammer.svg";
import rating from "./rating.svg";
import calendar from "./calendar.svg";
import term from "./term.svg";

function WhyWe() {
  return (
    <section className={`sectionMainPage ${styles.whyWe}`}>
      <div className={styles.imageContainer}>
        <h2 className={`sectionTitle ${styles.sectionTitle}`}>
          Почему клиенты выбирают нас
        </h2>
        <img
          src="http://krovla.pro/files/remont_metallicheskoi_krovli3.jpg"
          className={styles.image}
        />
        <div className={styles.advantagesContainer}>
          <div className={styles.advantageCard}>
            <img src={hammer} className={styles.advantageImage} />
            <div>
              <p className={styles.number}>1500 м²</p>
              <p className={styles.title}>Смонтировано</p>
            </div>

            <p className={styles.description}>
              Опианывад лыр фдрр олрлоыв лоарв ддол
            </p>
          </div>
          <div className={styles.advantageCard}>
            <img src={rating} className={styles.advantageImage} />
            <div>
              <p className={styles.number}>15</p>
              <p className={styles.title}>Выполненных проектов</p>
            </div>
            <p className={styles.description}>
              Опианывад лыр фдрр олрлоыв лоарв ддол
            </p>
          </div>
          <div className={styles.advantageCard}>
            <img src={calendar} className={styles.advantageImage} />
            <div>
              <p className={styles.number}>5</p>
              <p className={styles.title}>Лет на рынке</p>
            </div>
            <p className={styles.description}>
              Опианывад лыр фдрр олрлоыв лоарв ддол
            </p>
          </div>
          <div className={styles.advantageCard}>
            <img src={term} className={styles.advantageImage} />
            <div>
              <p className={styles.number}>2</p>
              <p className={styles.title}>Года гарантии на работу</p>
            </div>
            <p className={styles.description}>
              Опианывад лыр фдрр олрлоыв лоарв ддол
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyWe;