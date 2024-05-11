import Hero from "../components/Hero/Hero";
import { data } from "../data/heroData";
const Home = () => {
  return (
    <>
      <Hero
        title={data.home.title}
        img={data.home.img}
        text={data.home.text}
        btnClass={data.home.btnClass}
      />
    </>
  );
};
export default Home;
