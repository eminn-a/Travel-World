import { useContext } from "react";
import ImageSlider from "../ImageSlider/ImageSlider";
import styles from "./SingleBlogStyles.module.css";
import { UserContext } from "../../contexts/authContext";
import { Link } from "react-router-dom";

const SingleBlog = ({ data }) => {
  const { isAdmin } = useContext(UserContext);

  return (
    <>
      <div className={styles.infoContainer}>
        <div className={styles.blogInfoContainer}>
          <div className={styles.blogTitle}>
            <h1>{data.title}</h1>
          </div>
          <div className={styles.blogDescription}>
            <p>{data.description}</p>
          </div>
        </div>
        {isAdmin && (
          <div className={styles.btnContainer}>
            <Link to={`/editDestination/${data._id}`}>
              <button className={styles.editBtn}>Edit</button>
            </Link>
            <button className={styles.deleteBtn}>Delete</button>
          </div>
        )}
      </div>
      <ImageSlider images={data.images} />
    </>
  );
};

export default SingleBlog;
