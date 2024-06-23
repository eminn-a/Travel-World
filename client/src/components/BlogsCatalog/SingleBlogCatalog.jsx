import { Link } from "react-router-dom";
import formatDate from "../../utils/dateFormater";
import styles from "./BlogCatalogStyles.module.css";
import textSlice from "../../utils/textSlicer";

const SingleBlogCatalog = ({
  images,
  title,
  description,
  count,
  date,
  _id,
}) => {
  const flag = Number(count) % 2 === 0 ? true : false;
  return (
    <div className={flag ? styles.tCard : styles.tCardReverse}>
      <div className={styles.tImage}>
        <img src={images[0]} alt="" />
      </div>
      <div className={styles.sTripText}>
        <h4>{title}</h4>
        <div className={styles.date}>
          <i>
            {" "}
            <i className="fa-regular fa-calendar"></i> {formatDate(date)}
          </i>
        </div>
        <p>{textSlice(description)}</p>
        {/* <br /> */}
        <Link to={`/blogs/${_id}`}>
          <p className={styles.readMore}>Read More</p>
        </Link>
      </div>
    </div>
  );
};

export default SingleBlogCatalog;
