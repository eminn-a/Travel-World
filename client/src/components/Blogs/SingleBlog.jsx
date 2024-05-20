import styles from "./BlogsStyles.module.css";

const Singleblog = ({ img, heading, desc }) => {
  return (
    <div className={styles.tCard}>
      <div className={styles.tImage}>
        <img src={img} alt="" />
      </div>
      <div className={styles.sTripText}>
        <h4>{heading}</h4>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default Singleblog;
