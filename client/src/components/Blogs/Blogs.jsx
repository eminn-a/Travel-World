import SingleBlog from "./SingleBlog";
import styles from "./BlogsStyles.module.css";
import Spinner from "../Shared/Spinner/Spinner";

const Blog = ({ data, spinner, error }) => {
  return (
    <div className={styles.trip}>
      <h1>Latest blog posts!</h1>
      <p>
        Discover unforgettable adventures and amazing memories we've made
        together!
      </p>
      {spinner && <Spinner />}
      {error && <h3 className="errorMsg">Something went wrong!</h3>}
      <div className={styles.tripCardContainer}>
        {data?.map((x) => (
          <SingleBlog {...x} key={x._id} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
