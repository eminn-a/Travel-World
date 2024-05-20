import styles from "./HeroStyles.module.css";
import { Link } from "react-router-dom";

const Hero = ({ image, title, text, url, btnName, img, largeImg }) => {
  return (
    <div className={largeImg ? styles.hero : styles.heroMid}>
      <img src={img} alt="Hero img" />
      <div className={styles.heroText}>
        <h1>{title}</h1>
        <p>{text}</p>
        {btnName && (
          <Link to={url} className={styles.show}>
            {btnName}
          </Link>
        )}
      </div>
    </div>
  );
};

export default Hero;
