import styles from "./HeroStyles.module.css";

const Hero = ({ image, title, text, url, btnName, img }) => {
  return (
    <div className={styles.hero}>
      <img src={img} alt="Hero img" />
      <div className={styles.heroText}>
        <h1>{title}</h1>
        <p>{text}</p>
        {btnName && (
          <a href={url} className={styles.show}>
            {btnName}
          </a>
        )}
      </div>
    </div>
  );
};

export default Hero;
