import Hero from "../components/Hero/Hero";
import { data } from "../data/heroData";
import hero from "../assets/hero.jpg";

const Home = () => {
  return (
    <>
      <Hero img={hero} {...data.home} />
    </>
  );
};
export default Home;
