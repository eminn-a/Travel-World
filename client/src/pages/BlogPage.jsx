import BlogCatalog from "../components/BlogsCatalog/BlogsCatalog";
import Hero from "../components/Hero/Hero";
import { heroData } from "../data/heroData";
import { tripData } from "../data/tripData";

const BlogPage = () => {
  return (
    <>
      <Hero {...heroData.blog} />
      <BlogCatalog data={tripData} />
    </>
  );
};

export default BlogPage;
