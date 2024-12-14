import BlogsCatalog from "../components/BlogsCatalog/BlogsCatalog";
import Hero from "../components/Hero/Hero";
import { heroData } from "../data/heroData";
import * as blogService from "./../services/blogService";
import { useQuery } from "@tanstack/react-query";

const BlogsPage = () => {
  const {
    data: allBlogs,
    isLoading: allBlogsLoading,
    error: allBlogsError,
  } = useQuery({
    queryKey: ["allBlogs"],
    queryFn: blogService.getAll,
  });

  return (
    <>
      <Hero {...heroData.blog} />
      <BlogsCatalog
        data={allBlogs}
        spinner={allBlogsLoading}
        error={allBlogsError}
      />
    </>
  );
};

export default BlogsPage;
