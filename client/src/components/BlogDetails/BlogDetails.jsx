import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

import styles from "./BlogDetailsStyles.module.css";
import { UserContext } from "../../contexts/authContext";
import * as blogService from "../../services/blogService";
import ImageSlider from "../ImageSlider/ImageSlider";

const SingleBlog = ({ data }) => {
  const { isAdmin } = useContext(UserContext);

  const navigate = useNavigate();
  const deleteBlogMutation = useMutation({
    mutationFn: (id) => blogService.deleteById(id),
    onSuccess: () => {
      navigate("/blogs");
      toast.success(`Successfully deleted ${data.title}`);
    },
    onError: (error) => {
      toast.error(`Error deleting ${error.message}`);
    },
  });

  const onDeleteHandler = () => {
    if (confirm(`Delete ${data.title}? This action cannot be undone.`))
      deleteBlogMutation.mutate(data._id);
  };

  return (
    <>
      <div className={styles.infoContainer}>
        <div className={styles.blogInfoContainer}>
          <div className={styles.blogTitle}>
            <h1>{data.title}</h1>
          </div>
          <div className={styles.blogDescription}>
            <p>{data.description}</p>
          </div>
        </div>
        {isAdmin && (
          <div className={styles.btnContainer}>
            <Link to={`/editBlog/${data._id}`}>
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

export default SingleBlog;
