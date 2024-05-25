import React, { useState } from "react";
import styles from "./CreateDestinationStyles.module.css";

import toast from "react-hot-toast";

const CreateDestination = () => {
  const [numImages, setNumImages] = useState(2);

  const imageInputs = [];
  const limit = 4;

  const addImageInput = () => {
    if (numImages === limit) {
      toast.error(`You can't add more than ${limit} images`);
    } else {
      setNumImages((prevNumImages) => prevNumImages + 1);
    }
  };

  for (let i = 1; i <= numImages; i++) {
    imageInputs.push(
      <input key={i} type="text" placeholder={`Img${i}`} required />
    );
  }

  return (
    <div className={styles.formContainer}>
      <h1 className={styles.title}>Destination informations</h1>
      <form>
        <input type="text" placeholder="Title" required />
        <input type="date" placeholder="Date" required />
        <input type="number" placeholder="Price" required />
        {imageInputs}
        <button type="button" onClick={addImageInput}>
          Add Image
        </button>
        <textarea name="" id="" placeholder="Descriptions" rows="10"></textarea>
        <button>Send message</button>
      </form>
    </div>
  );
};

export default CreateDestination;
