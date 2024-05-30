import styles from "./DestinationStyles.module.css";

const SingleDestination = ({ title, description, img1, img2, index }) => {
  const flag = Number(index) % 2 === 0 ? true : false;

  return (
    <div className={flag ? styles.firstDescript : styles.firstDescriptReverse}>
      <div className={styles.descriptText}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className={styles.media}>
        <img src={img1} alt="desctinationImg1" />
        <img src={img2} alt="desctinationImg2" />
      </div>
    </div>
  );
};
export default SingleDestination;
