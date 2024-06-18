import { useState } from "react";

const useImageInputs = (initialCount) => {
  const [imgCount, setImgCount] = useState(initialCount);

  const handleAddImage = () => {
    setImgCount((prevCount) => prevCount + 1);
  };

  return {
    imgCount,
    handleAddImage,
  };
};

export default useImageInputs;
