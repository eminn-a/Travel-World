import "./HeroStyles.css";

const Hero = ({ img, title, text, btnClass, url }) => {
  console.log();

  return (
    <div className="hero">
      <img src={img} alt="Hero img" />
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
