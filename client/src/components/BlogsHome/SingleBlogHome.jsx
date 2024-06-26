import textSlice from "../../utils/textSlicer";
import styles from "./HomeBlogsStyles.module.css";
import { Link } from "react-router-dom";

const SingleBlogHome = ({ images, title, description, _id }) => {
  return (
    <div className={styles.tCard}>
      <div className={styles.tImage}>
        <img src={images[0]} alt="" />
      </div>
      <div className={styles.sTripText}>
        <h4>{title}</h4>
        <p>{textSlice(description)}</p>
        <Link to={`/blogs/${_id}`}>
          <p className={styles.readMore}>Read More</p>
        </Link>
      </div>
    </div>
  );
};

export default SingleBlogHome;
