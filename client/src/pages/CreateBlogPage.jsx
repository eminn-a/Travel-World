import CreateBlog from "../components/CreateBlog/CreateBlog";
import Hero from "../components/Hero/Hero";

import { heroData } from "../data/heroData";

const CreateBlogPage = () => {
  return (
    <>
      <Hero {...heroData.createBlog} />
      <CreateBlog />
    </>
  );
};

export default CreateBlogPage;
