import toast from "react-hot-toast";
import styles from "./SingleDestinationStyles.module.css";
import Spinner from "../Shared/Spinner/Spinner";
import ImageSlider from "../ImageSlider/ImageSlider";
import { useContext } from "react";
import { UserContext } from "../../contexts/authContext";
import formatDate from "../../utils/dateFormater";
import { useMutation } from "@tanstack/react-query";
import { useNavigate, Link } from "react-router-dom";
import * as destinationService from "../../services/destinationServices";

const SingleDestination = (data) => {
  const { isAdmin, userData } = useContext(UserContext);

  const navigate = useNavigate();
  const deleteDestinationMutation = useMutation({
    mutationFn: (id) => destinationService.deleteById(id),
    onSuccess: () => {
      navigate("/catalog");
      toast.success(`Successfully deleted ${data.title}`);
    },
    onError: (error) => {
      toast.error(`Error deleting ${error.message}`);
    },
  });

  const onDeleteHandler = () => {
    if (confirm(`Delete ${data.title}? This action cannot be undone.`))
      deleteDestinationMutation.mutate(data._id);
  };

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
                if (userData) {
                  toast.success(`${data.title} - Booked!`);
                } else {
                  toast.error("Need to log in first!");
                }
              }}
            >
              Book Now!
            </button>
          </div>
          <div>
            <h4>Description:</h4>
            <p>{data.description}</p>
          </div>
          <div>
            <h4>Journey Starts:</h4>
            <h3>
              <i className="fa-regular fa-calendar"></i> {formatDate(data.date)}
            </h3>
          </div>
        </div>
        {isAdmin && (
          <div className={styles.btnContainer}>
            <Link to={`/editDestination/${data._id}`}>
              <button className={styles.editBtn}>Edit</button>
            </Link>
            <button onClick={onDeleteHandler} className={styles.deleteBtn}>
              Delete
            </button>
          </div>
        )}
      </div>
      <ImageSlider images={data.images} />
    </>
  );
};

export default SingleDestination;
