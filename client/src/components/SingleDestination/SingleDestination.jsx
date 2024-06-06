import toast from "react-hot-toast";
import styles from "./SingleDestinationStyles.module.css";
import Spinner from "../Shared/Spinner/Spinner";

const SingleDestination = (data) => {
  if (!data) {
    return (
      <div className={styles.infoContainer}>
        <Spinner />
      </div>
    );
  }

  return (
    <div className={styles.infoContainer}>
      <br />
      <h1>Price: $ {data.price}</h1>
      <button
        onClick={() => {
          toast.success(`${data.title} - Booked!`);
        }}
      >
        Book Now!
      </button>
      <div>
        <h4>Description:</h4>
        <p>{data.description}</p>
      </div>
      <div className={styles.mediaContainer}>
        <div className={styles.mediaBox}>
          <img src={data.img1} alt="" />
        </div>
        <div className={styles.mediaBox}>
          <img src={data.img2} alt="" />
        </div>
      </div>
    </div>
  );
};
export default SingleDestination;
