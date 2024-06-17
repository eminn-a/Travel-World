import { Link } from "react-router-dom";
import styles from "./CatalogStyles.module.css";

const SingleCatalogItem = ({
  images,
  title,
  description,
  _id,
  date,
  price,
}) => {
  return (
    <div className={styles.tCard}>
      <div className={styles.tImage}>
        <img src={images[0]} alt="" />
      </div>
      <div className={styles.sTripText}>
        <h4>{title}</h4>
        <div className={styles.infoContainer}>
          <div>
            <i class="fa-solid fa-euro-sign"></i>
            {price}
          </div>
          <div>
            <i class="fa-regular fa-calendar"></i>
            {date}
          </div>
        </div>
        <p>{description}</p>
      </div>
      <Link to={`/catalog/${_id}`}>
        <button className={styles.btn}>Check out!</button>
      </Link>
    </div>
  );
};

export default SingleCatalogItem;
