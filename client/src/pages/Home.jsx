import Hero from "../components/Hero/Hero";
import { data } from "../data/heroData";
import hero from "../assets/hero.jpg";
import Destination from "../components/Destination/Destination";

const Home = () => {
  return (
    <>
      <Hero {...data.home} image={hero} />
      <Destination />
      {/* <Hero {...data.about} image={hero} />
      <Hero {...data.contacts} image={hero} />
      <Hero {...data.home} image={hero} /> */}
    </>
  );
};
export default Home;
