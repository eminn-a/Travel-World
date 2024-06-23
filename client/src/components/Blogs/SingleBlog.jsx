import textSlice from "../../utils/textSlicer";
import styles from "./BlogsStyles.module.css";

const Singleblog = ({ images, title, description }) => {
  return (
    <div className={styles.tCard}>
      <div className={styles.tImage}>
        <img src={images[0]} alt="" />
      </div>
      <div className={styles.sTripText}>
        <h4>{title}</h4>
        <p>{textSlice(description)}</p>
      </div>
    </div>
  );
};

export default Singleblog;
