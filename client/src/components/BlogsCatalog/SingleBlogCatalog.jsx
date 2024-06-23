import formatDate from "../../utils/dateFormater";
import styles from "./BlogCatalogStyles.module.css";

const SingleBlogCatalog = ({ images, title, description, count, date }) => {
  const flag = Number(count) % 2 === 0 ? true : false;
  return (
    <div className={flag ? styles.tCard : styles.tCardReverse}>
      <div className={styles.tImage}>
        <img src={images[0]} alt="" />
      </div>
      <div className={styles.sTripText}>
        <h4>{title}</h4>
        <div className={styles.date}>
          <i>
            {" "}
            <i className="fa-regular fa-calendar"></i> {formatDate(date)}
          </i>
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default SingleBlogCatalog;
