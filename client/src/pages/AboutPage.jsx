import AboutUs from "../components/AboutUs/AboutUs";
import Hero from "../components/Hero/Hero";
import { heroData } from "../data/heroData";

const AboutPage = () => {
  return (
    <>
      <Hero {...heroData.about} />
      <AboutUs />
    </>
  );
};
export default AboutPage;
