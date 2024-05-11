import "./HeroStyles.css";

const Hero = ({ title, text, url, btnClass, image }) => {
  return (
    <div className="hero">
      <img src={image} alt="Hero img" />
      <div className="heroText">
        <h1>{title}</h1>
        <ul></ul>
        <p>{text}</p>
        <a href={url} className={btnClass}>
          Travel Plan
        </a>
      </div>
    </div>
  );
};

export default Hero;
