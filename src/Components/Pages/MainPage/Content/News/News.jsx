import NewsItem from "./NewsItem/NewsItem";
import styles from "./News.module.css";

function News() {
  return (
    <section className="sectionMainPage">
      <div>
        <h2 className={"sectionTitle"}>Последние события</h2>
        <div className={styles.servicesContainer}>
          {servicesList.map((service, i) => (
            <NewsItem {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}

let servicesList = [
  {
    title: "Сдана работа по монтажу крыши",
    img:
      "https://www.onduline.ru/blog/sites/default/files/blog/2017/03/valmovaja-krysha-foto-42.jpg",
    sticker: "",
    description:
      "Lorem ipsum sadfk slf hgsklkj lsalf kkf hahg otl. dsh ogl. hskj ljio, sdsyhy sf",
  },
  {
    title: "Сдана работа по монтажу крыши",
    img:
      "https://z500proekty.ru/z500ru/grafika/%D1%81%D1%82%D1%80%D0%BE%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%D1%81%D1%82%D0%B2%D0%BE%20%D0%B4%D0%B5%D1%80%D0%B5%D0%B2%D1%8F%D0%BD%D0%BD%D0%BE%D0%B3%D0%BE%20%D0%BA%D0%B0%D1%80%D0%BA%D0%B0%D1%81%D0%BD%D0%BE%D0%B3%D0%BE%20%D0%B4%D0%BE%D0%BC%D0%B0%20z116%20%D1%84%D0%BE%D1%82%D0%BE5.jpg",
    sticker: "",
    description:
      "Lorem ipsum sadfk slf hgsklkj lsalf kkf hahg otl. dsh ogl. hskj ljio, sdsyhy sf",
  },
  {
    title: "Открыт офис",
    img: "https://finestra.biz/upload/medialibrary/8d5/IMG_6738.jpg",
    sticker: "",
    description:
      "Lorem ipsum sadfk slf hgsklkj lsalf kkf hahg otl. dsh ogl. hskj ljio, sdsyhy sf",
  },
];

export default News;