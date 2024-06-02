import Spinner from "../Shared/Spinner/Spinner";
import styles from "./DestinationStyles.module.css";
import SingleDestination from "./singleDestination";

const Destination = ({ data, spinner }) => {
  console.log(spinner);
  return (
    <div className={styles.destination}>
      <h1>Next Destinations!</h1>
      <p>Tours give you the oportyunity to see a lot, withing a time frame.</p>

      {spinner && <Spinner />}

      {data?.map((x, index) => (
        <SingleDestination {...x} index={index} key={x._id} />
      ))}

      {data?.length === 0 && <h3 className="errorMsg">No item there!</h3>}
    </div>
  );
};

export default Destination;
