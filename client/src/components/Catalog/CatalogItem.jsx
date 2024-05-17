import styles from "./CatalogStyles.module.css";
import SingleCatalogItem from "./SingleCatalogItem";

const CatalogItem = (catalogData) => {
  return (
    <div className={styles.trip}>
      <h1>Catalog items here</h1>
      <p>
        Discover unforgettable adventures and amazing memories we've made
        together!
      </p>
      <div className={styles.tripCardContainer}>
        {catalogData.data.map((x, index) => (
          <SingleCatalogItem key={index} {...x} />
        ))}
      </div>
    </div>
  );
};

export default CatalogItem;
