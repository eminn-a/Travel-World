import styles from "./DestinationStyles.module.css";
import { Link } from "react-router-dom";

const SingleDestination = ({ title, description, img1, img2, index, _id }) => {
  const flag = Number(index) % 2 === 0 ? true : false;

  return (
    <Link to={`/catalog/${_id}`}>
      <div
        className={flag ? styles.firstDescript : styles.firstDescriptReverse}
      >
        <div className={styles.descriptText}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className={styles.media}>
          <img src={img1} alt="desctinationImg1" />
          <img src={img2} alt="desctinationImg2" />
        </div>
      </div>
    </Link>
  );
};
export default SingleDestination;
