import toast from "react-hot-toast";
import styles from "./SingleDestinationStyles.module.css";
import Spinner from "../Shared/Spinner/Spinner";
import ImageSlider from "../ImageSlider/ImageSlider";

const SingleDestination = (data) => {
  if (!data) {
    return (
      <div className={styles.infoContainer}>
        <Spinner />
      </div>
    );
  }

  return (
    <>
      <div className={styles.infoContainer}>
        <br />
        <h1>
          Price: <i class="fa-solid fa-euro-sign"></i> {data.price}
        </h1>
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
      </div>
      <ImageSlider images={data.images} />
    </>
  );
};
export default SingleDestination;
