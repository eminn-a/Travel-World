import BlogCatalog from "../components/BlogsCatalog/BlogsCatalog";
import Hero from "../components/Hero/Hero";
import { heroData } from "../data/heroData";
import { useQuery } from "@tanstack/react-query";
import * as blogService from "./../services/blogService";

const BlogsPage = () => {
  const {
    data: allBlogs,
    isLoading: allBlogsLoading,
    error: allBlogsError,
  } = useQuery({
    queryKey: ["allBlogs"],
    queryFn: blogService.getAll,
  });
  console.log(allBlogs);
  return (
    <>
      <Hero {...heroData.blog} />
      <BlogCatalog
        data={allBlogs}
        spinner={allBlogsLoading}
        error={allBlogsError}
      />
    </>
  );
};

export default BlogsPage;
