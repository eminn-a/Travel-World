import { Link } from "react-router-dom";
import styles from "./DestinationsCatalogStyles.module.css";
import formatDate from "../../utils/dateFormater";

const SingleDestinationCatalogItem = ({
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
            <i className="fa-solid fa-euro-sign"></i>
            {price}
          </div>
          <div>
            <i className="fa-regular fa-calendar"></i>
            {formatDate(date)}
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

export default SingleDestinationCatalogItem;
