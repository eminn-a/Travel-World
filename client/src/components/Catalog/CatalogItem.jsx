import Spinner from "../Shared/Spinner/Spinner";
import styles from "./CatalogStyles.module.css";
import SingleCatalogItem from "./SingleCatalogItem";

const CatalogItem = ({ data, error, isLoading }) => {
  return (
    <div className={styles.trip}>
      <h1>Catalog items here</h1>
      <p>
        Discover unforgettable adventures and amazing memories we've made
        together!
      </p>

      {isLoading && <Spinner></Spinner>}
      <br />
      {error && <h2 className="errorMsg">Something went wrong!</h2>}

      <div className={styles.tripCardContainer}>
        {data?.map((x) => (
          <SingleCatalogItem key={x._id} {...x} />
        ))}
      </div>
    </div>
  );
};

export default CatalogItem;
