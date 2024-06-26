import Spinner from "../Shared/Spinner/Spinner";
import styles from "./DestinationsHomeStyles.module.css";
import DestinationsHomeItem from "./DestinationsHomeItem";

const DestinationsHome = ({ data, spinner, error }) => {
  return (
    <div className={styles.destination}>
      <h1>Next Destinations!</h1>
      <p>Tours give you the oportyunity to see a lot, withing a time frame.</p>

      {spinner && <Spinner />}

      {data?.map((x, index) => (
        <DestinationsHomeItem {...x} index={index} key={x._id} />
      ))}

      {error && <h3 className="errorMsg">Something went wrong!</h3>}
    </div>
  );
};

export default DestinationsHome;
