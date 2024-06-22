import Hero from "../components/Hero/Hero";
import { heroData } from "../data/heroData";

const BlogPage = () => {
  return (
    <>
      <Hero {...heroData.blog} />
      <h1>BlogPage</h1>
    </>
  );
};

export default BlogPage;
