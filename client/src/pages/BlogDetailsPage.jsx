import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import * as blogService from "../services/blogService";
import Hero from "../components/Hero/Hero";
import Spinner from "../components/Shared/Spinner/Spinner";
import formatDateString from "../utils/formatDateString";
import BlogDetails from "../components/BlogDetails/BlogDetails";

const BlogDetailsPage = () => {
  const { id } = useParams();

  const {
    data: blog,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["blog", id],
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
      <Hero
        img={blog?.images[0]}
        title={blog?.title}
        btnName={formatDateString(blog?.date)}
      />
      <BlogDetails data={blog} />
    </>
  );
};

export default BlogDetailsPage;
