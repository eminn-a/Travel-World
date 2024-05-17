import Hero from "../components/Hero/Hero";
import { heroData } from "../data/heroData";

const About = () => {
  return (
    <>
      <Hero {...heroData.about} />
    </>
  );
};
export default About;
