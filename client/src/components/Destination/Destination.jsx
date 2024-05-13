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

      {/* <h1>Most visited!</h1>
      <p>{titleDesc}</p> */}
      <div className={styles.firstDescriptReverse}>
        <div className={styles.descriptText}>
          <h2>Mykonos, Island in Greece</h2>
          <p>
            Mykonos is an island in the Cyclades group in the Aegean Sea. It's
            popularly known for its summer party atmosphere. Beaches such as
            Paradise and Super Paradise have bars that blare thumping music.
            Massive dance clubs attract world-renowned DJs and typically stay
            open well past dawn. Iconic landmarks include a row of 16th-century
            windmills, which sit on a hill above Mykonos town.
          </p>
        </div>
        <div className={styles.media}>
          <img
            src="https://images.pexels.com/photos/18140870/pexels-photo-18140870/free-photo-of-view-of-the-shore-and-waterfront-buildings-on-mykonos-greece.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="desctinationImg"
          />
          <img
            src="https://images.pexels.com/photos/15532701/pexels-photo-15532701/free-photo-of-mediterranean-town-in-summer.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="desctinationImg"
          />
        </div>
      </div>
    </div>
  );
};

export default Destination;
