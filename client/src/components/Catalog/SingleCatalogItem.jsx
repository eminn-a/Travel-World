import styles from "./CatalogStyles.module.css";

const SingleCatalogItem = ({ img, heading, desc }) => {
  return (
    <div className={styles.tCard}>
      <div className={styles.tImage}>
        <img src={img} alt="" />
      </div>
      <div className={styles.sTripText}>
        <h4>{heading}</h4>
        <p>{desc}</p>
        <p>{desc}</p>
        <p>{desc}</p>
      </div>
      <button className={styles.btn}>Check out!</button>
    </div>
  );
};

export default SingleCatalogItem;
