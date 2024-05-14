import SingleTrip from "./SingleTrip";
import styles from "./TripsStyles.module.css";
import { tripData } from "../../data/tripData";

const Trips = () => {
  return (
    <div className={styles.trip}>
      <h1>Latest blog posts!</h1>
      <p>
        Discover unforgettable adventures and amazing memories we've made
        together!
      </p>
      <div className={styles.tripCardContainer}>
        {tripData.map((x, index) => (
          <SingleTrip {...x} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Trips;
