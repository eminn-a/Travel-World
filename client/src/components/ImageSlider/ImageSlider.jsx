import { useState } from "react";

import "./imageSliderStyles.css";

const ImageSlider = ({ images }) => {
  const [imageIndex, setImageIndex] = useState(0);

  function showNextImg() {
    setImageIndex((index) => {
      if (index === images.length - 1) return 0;
      return index + 1;
    });
  }

  function showPreviousImg() {
    setImageIndex((index) => {
      if (index === 0) return images.length - 1;
      return index - 1;
    });
  }

  if (images === undefined) return null;

  return (
    <div className="sectionSlider" aria-label="Image Slider">
      <div className="sliderContainer">
        <div className="imgCard">
          {images.map((img, index) => (
            <img
              src={img}
              key={img}
              alt={img}
              aria-hidden={imageIndex !== index}
              className="sliderImg"
              style={{ translate: `${-100 * imageIndex}%` }}
            />
          ))}
        </div>
        <button
          onClick={showPreviousImg}
          className="sliderBtn"
          style={{ left: 0 }}
        >
          <i className="fa-solid fa-circle-left" aria-hidden></i>
        </button>
        <button
          onClick={showNextImg}
          className="sliderBtn"
          style={{ right: 0 }}
        >
          <i className="fa-solid fa-circle-right" aria-hidden></i>
        </button>
        <div className="pageContainer">
          {images.map((x, index) => (
            <button
              className={index === imageIndex ? "pageBtns active" : "pageBtns"}
              onClick={() => setImageIndex(index)}
              key={index + 1}
            >
              <i className="fa-solid fa-circle" aria-hidden></i>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
