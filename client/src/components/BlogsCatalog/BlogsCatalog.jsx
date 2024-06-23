import SingleBlogCatalog from "./SingleBlogCatalog";
import styles from "./BlogCatalogStyles.module.css";
import Spinner from "../Shared/Spinner/Spinner";

const BlogCatalog = ({ data, spinner, error }) => {
  return (
    <div className={styles.trip}>
      <h1>All Blogs!</h1>
      <p>Check out our amazing memories</p>
      {spinner && <Spinner />}
      {error && <h3 className="errorMsg">Something went wrong!</h3>}
      <div className={styles.tripCardContainer}>
        {data?.map((x, index) => (
          <SingleBlogCatalog {...x} key={x._id} count={index} />
        ))}
      </div>
    </div>
  );
};

export default BlogCatalog;
