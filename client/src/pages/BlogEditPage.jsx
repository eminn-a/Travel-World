import { useQuery } from "@tanstack/react-query";
import { heroData } from "../data/heroData";
import Hero from "../components/Hero/Hero";
import { useParams } from "react-router-dom";
import * as blogService from "../services/blogService";
import Spinner from "../components/Shared/Spinner/Spinner";
import CreateDestination from "../components/DestinationCreate/DestinationCreate";
import BlogCreate from "../components/BlogCreate/BlogCreate";

const BlogEditPage = () => {
  const { id } = useParams();

  const {
    data: blog,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["editBlog", id],
    queryFn: () => blogService.getById(id),
  });

  if (isLoading) {
    return (
      <div
        style={{
          height: "76vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Spinner />
      </div>
    );
  }
  if (error) {
    return (
      <div
        style={{
          height: "76vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1 className="errorMsg">Something went wrong!</h1>
      </div>
    );
  }

  return (
    <>
      <Hero {...heroData.editBlog} />
      <BlogCreate editData={blog} />
    </>
  );
};

export default BlogEditPage;
