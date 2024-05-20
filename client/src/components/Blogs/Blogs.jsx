import SingleTrip from "./SingleBlog";
import styles from "./BlogsStyles.module.css";

const Blog = ({ data }) => {
  return (
    <div className={styles.trip}>
      <h1>Latest blog posts!</h1>
      <p>
        Discover unforgettable adventures and amazing memories we've made
        together!
      </p>
      <div className={styles.tripCardContainer}>
        {data.map((x, index) => (
          <SingleTrip {...x} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
