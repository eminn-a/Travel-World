import toast from "react-hot-toast";
import styles from "./SingleDestinationStyles.module.css";
import Spinner from "../Shared/Spinner/Spinner";
import ImageSlider from "../ImageSlider/ImageSlider";
import { useContext } from "react";
import { UserContext } from "../../contexts/authContext";
import formatDate from "../../utils/dateFormater";

const SingleDestination = (data) => {
  const { isAdmin } = useContext(UserContext);

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
        <div className={styles.destinationInfoContainer}>
          <div className={styles.destinationBookContainer}>
            <h1>
              Price: <i className="fa-solid fa-euro-sign"></i> {data.price}
            </h1>
            <button
              className={styles.bookBtn}
              onClick={() => {
                toast.success(`${data.title} - Booked!`);
              }}
            >
              Book Now!
            </button>
          </div>
          <div>
            <h4>Description:</h4>
            <p>{data.description}</p>
          </div>
          <h3>
            <i className="fa-regular fa-calendar"></i> {formatDate(data.date)}
          </h3>
        </div>
        {isAdmin && (
          <div className={styles.btnContainer}>
            <button className={styles.editBtn}>Edit</button>
            <button className={styles.deleteBtn}>Delete</button>
          </div>
        )}
      </div>
      <ImageSlider images={data.images} />
    </>
  );
};
export default SingleDestination;
