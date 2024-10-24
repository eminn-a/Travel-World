import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./DestinationsHomeStyles.module.css";

const DestinationsHomeItem = ({ title, description, images, index, _id }) => {
  const [loadedImages, setLoadedImages] = useState([]);

  useEffect(() => {
    if (images) {
      setLoadedImages(images);
    }
  }, [images]);

  const flag = Number(index) % 2 === 0 ? true : false;

  return (
    <Link to={`/catalog/${_id}`}>
      <div
        className={flag ? styles.firstDescript : styles.firstDescriptReverse}
      >
        <div className={styles.descriptText}>
          <h2>
            <i className="fa-solid fa-signs-post"></i>
            {title}
          </h2>

          <p>{description}</p>
        </div>
        <div className={styles.media}>
          {loadedImages[0] && (
            <img src={loadedImages[0]} alt="destinationImg1" />
          )}
          {loadedImages[1] && (
            <img src={loadedImages[1]} alt="destinationImg2" />
          )}
        </div>
      </div>
    </Link>
  );
};
export default DestinationsHomeItem;
