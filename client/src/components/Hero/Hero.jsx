import styles from "./HeroStyles.module.css";

const Hero = ({ image, title, text, url, name }) => {
  return (
    <div className={styles.hero}>
      <img src={image} alt="Hero img" />
      <div className={styles.heroText}>
        <h1>{title}</h1>
        <ul></ul>
        <p>{text}</p>
        {name && (
          <a href={url} className={styles.show}>
            {name}
          </a>
        )}
      </div>
    </div>
  );
};

export default Hero;
