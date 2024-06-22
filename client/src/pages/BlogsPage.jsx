import BlogCatalog from "../components/BlogsCatalog/BlogsCatalog";
import Hero from "../components/Hero/Hero";
import { heroData } from "../data/heroData";
import { tripData } from "../data/tripData";
import { useQuery } from "@tanstack/react-query";
import * as destinationService from "./../services/destinationServices";

const BlogsPage = () => {
  const {
    data: allBlogs,
    isLoading: allBlogsLoading,
    error: allBlogsError,
  } = useQuery({
    queryKey: ["allBlogs"],
    queryFn: destinationService.getAll,
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
