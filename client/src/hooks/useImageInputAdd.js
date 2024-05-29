import { useState } from "react";

const useImageInputAdd = (initialInputs = []) => {
  const [imageInputs, setImageInputs] = useState(initialInputs);

  const addImageInput = () => {
    setImageInputs([...imageInputs, ""]);
  };

  const handleImageInputChange = (index, event) => {
    const newImageInputs = [...imageInputs];
    newImageInputs[index] = event.target.value;
    setImageInputs(newImageInputs);
  };

  return {
    imageInputs,
    addImageInput,
    handleImageInputChange,
  };
};

export default useImageInputAdd;
