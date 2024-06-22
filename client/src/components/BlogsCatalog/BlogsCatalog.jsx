import SingleBlogCatalog from "./SingleBlogCatalog";
import styles from "./BlogCatalogStyles.module.css";

const BlogCatalog = ({ data }) => {
  return (
    <div className={styles.trip}>
      <h1>Latest blog posts!</h1>
      <p>
        Discover unforgettable adventures and amazing memories we've made
        together!
      </p>
      <div className={styles.tripCardContainer}>
        {data.map((x, index) => (
          <SingleBlogCatalog {...x} key={index} count={index} />
        ))}
      </div>
    </div>
  );
};

export default BlogCatalog;
