import styles from "./DestinationStyles.module.css";
import img from "../../assets/hero.jpg";

const Destination = () => {
  return (
    <div className={styles.destination}>
      <h1>Popular Destinations</h1>
      <p>Tours give you the oportyunity to see a lot, withing a time frame.</p>
      <div className={styles.firstDescript}>
        <div className={styles.descriptText}>
          <h2>Heading goes here</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            minima voluptates quis ratione fugiat ipsum exercitationem veritatis
            molestias nemo qui, placeat, facere repellat neque. Reprehenderit
            ratione eveniet expedita quam eos!
          </p>
        </div>
        <div className={styles.media}>
          <img src={img} alt="img" />
          <img src={img} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default Destination;
