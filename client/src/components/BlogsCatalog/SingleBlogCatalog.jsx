import styles from "./BlogCatalogStyles.module.css";

const SingleBlogCatalog = ({ images, title, description, count }) => {
  const flag = Number(count) % 2 === 0 ? true : false;
  return (
    <div className={flag ? styles.tCard : styles.tCardReverse}>
      <div className={styles.tImage}>
        <img src={images[0]} alt="" />
      </div>
      <div className={styles.sTripText}>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default SingleBlogCatalog;
