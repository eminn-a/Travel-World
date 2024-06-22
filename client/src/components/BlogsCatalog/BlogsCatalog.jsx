import SingleBlogCatalog from "./SingleBlogCatalog";
import styles from "./BlogCatalogStyles.module.css";

const BlogCatalog = ({ data }) => {
  return (
    <div className={styles.trip}>
      <h1>All Blogs!</h1>
      <p>Check out our amazing memories</p>
      <div className={styles.tripCardContainer}>
        {data.map((x, index) => (
          <SingleBlogCatalog {...x} key={index} count={index} />
        ))}
      </div>
    </div>
  );
};

export default BlogCatalog;
