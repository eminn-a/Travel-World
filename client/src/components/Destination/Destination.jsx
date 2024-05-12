import styles from "./DestinationStyles.module.css";

const Destination = ({
  title,
  titleDesc,
  heading,
  headingDesc,
  img1,
  img2,
}) => {
  return (
    <div className={styles.destination}>
      <h1>{title}</h1>
      <p>{titleDesc}</p>
      <div className={styles.firstDescript}>
        <div className={styles.descriptText}>
          <h2>{heading}</h2>
          <p>{headingDesc}</p>
        </div>
        <div className={styles.media}>
          <img src={img1} alt="desctinationImg" />
          <img src={img2} alt="desctinationImg" />
        </div>
      </div>
    </div>
  );
};

export default Destination;
