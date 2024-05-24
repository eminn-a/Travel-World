import styles from "./HeroStyles.module.css";
import { Link } from "react-router-dom";

import toast from "react-hot-toast";

const Hero = ({ title, text, url, btnName, img, largeImg }) => {
  return (
    <div className={largeImg ? styles.hero : styles.heroMid}>
      <img src={img} alt="Hero img" />
      <div className={styles.heroText}>
        <h1>{title}</h1>
        <p>{text}</p>
        {btnName && (
          <Link
            // to={url}
            className={styles.show}
            onClick={() => {
              toast.success("Success", {
                style: {
                  padding: "15px 90px",
                  color: "white",
                  background: "blue",
                  borderRadius: "50px",
                  fontWeight: "800",
                  fontSize: "20px",
                },
                iconTheme: {
                  primary: "white",
                  secondary: "black",
                },
                duration: 2000,
              });
            }}
          >
            {btnName}
          </Link>
        )}
      </div>
    </div>
  );
};

export default Hero;
