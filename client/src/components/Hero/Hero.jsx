import "./HeroStyles.css";

const Hero = (x) => {
  return (
    <div className="hero">
      <img src={x.img} alt="Hero img" />
      <div className="heroText">
        <h1>{x.title}</h1>
        <ul></ul>
        <p>{x.text}</p>
        <a href={x.url} className={x.btnClass}>
          Travel Plan
        </a>
      </div>
    </div>
  );
};

export default Hero;
