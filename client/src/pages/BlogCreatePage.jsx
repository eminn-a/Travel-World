import BlogCreate from "../components/BlogCreate/BlogCreate";
import Hero from "../components/Hero/Hero";

import { heroData } from "../data/heroData";

const BlogCreatePage = () => {
  return (
    <>
      <Hero {...heroData.createBlog} />
      <BlogCreate />
    </>
  );
};

export default BlogCreatePage;
