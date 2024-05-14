import styles from "./TripsStyles.module.css";

const SingleTrip = ({ img, heading, desc }) => {
  return (
    <div className={styles.tCard}>
      <div className={styles.tImage}>
        <img src={img} alt="" />
      </div>
      <h4>{heading}</h4>
      <p>{desc}</p>
    </div>
  );
};

export default SingleTrip;
