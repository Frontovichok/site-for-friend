import { NavLink } from "react-router-dom";
import styles from "./ProductCard.module.css";

function ProductCard(product) {
  return (
    <div className={styles.card}>
      <img src={product.img} />
      {product.tags.length != 0 && (
        <div className={styles.tagsContainer}>
          {product.tags.map((tag) => (
            <label className={styles.tag}>{tag}</label>
          ))}
        </div>
      )}
      <div className={styles.content}>
        <p className={styles.title}>{product.title}</p>
        <div className={styles.priceContainer}>
          {product.newPrice ? (
            <div className={styles.priceSale}>
              <p className={styles.oldPrice}>{product.price}</p>
              <p className={styles.newPrice}>{product.newPrice}</p>
              <p className={styles.priceUnit}>₽/м²</p>
            </div>
          ) : (
            <>
              <p className={styles.price}>{product.price}</p>
              <p className={styles.priceUnit}>₽/м²</p>
            </>
          )}
        </div>
      </div>
      <NavLink to="/ksjdf" className={styles.button}>
        Перейти в каталог
      </NavLink>
    </div>
  );
}

export default ProductCard;