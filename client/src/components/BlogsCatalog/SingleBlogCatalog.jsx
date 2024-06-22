import styles from "./BlogCatalogStyles.module.css";

const SingleBlogCatalog = ({ img, heading, desc, count }) => {
  const flag = Number(count) % 2 === 0 ? true : false;
  return (
    <div className={flag ? styles.tCard : styles.tCardReverse}>
      <div className={styles.tImage}>
        <img src={img} alt="" />
      </div>
      <div className={styles.sTripText}>
        <h4>{heading}</h4>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default SingleBlogCatalog;
