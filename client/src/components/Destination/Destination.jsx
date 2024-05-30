import styles from "./DestinationStyles.module.css";
import SingleDestination from "./singleDestination";

const Destination = ({ data }) => {
  return (
    <div className={styles.destination}>
      <h1>Next Destinations!</h1>
      <p>Tours give you the oportyunity to see a lot, withing a time frame.</p>

      {data.map((x, index) => (
        <SingleDestination {...x} index={index} key={x._id} />
      ))}
    </div>
  );
};

export default Destination;
