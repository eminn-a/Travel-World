import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState, useEffect } from "react";

import styles from "./CreateBlogStyles.module.css";
import { createBlogSchema } from "../../validations/formValidation";
import { useMutation, useQueryClient } from "@tanstack/react-query";

//CREATE BLOG SERVICES
import * as blogService from "../../services/blogService";

const CreateBlog = ({ editData }) => {
  const [imageFields, setImageFields] = useState([]);
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  useEffect(() => {
    if (editData && editData.images) {
      setImageFields(editData.images);
    } else {
      setImageFields(["", ""]);
    }
  }, [editData]);

  const addImageField = () => {
    setImageFields([...imageFields, ""]);
  };

  const handleImageChange = (index, value) => {
    const newImageFields = [...imageFields];
    newImageFields[index] = value;
    setImageFields(newImageFields);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(createBlogSchema),
    defaultValues: editData
      ? {
          title: editData.title,
          description: editData.description,
          ...editData.images.reduce((acc, image, index) => {
            acc[`img${index + 1}`] = image;
            return acc;
          }, {}),
        }
      : {},
  });

  //   ADD BLOG
  const addDestinationMutation = useMutation({
    mutationFn: (formData) => blogService.create(formData),
    onSuccess: () => {
      navigate("/blogs");
      toast.success("Successfully added new blog!");
    },
    onError: (error) => {
      navigate("/blogs");
      toast.error(`${error.message}`);
    },
  });

  //   UPDATE BLOG
  const updateDestinationMutation = useMutation({
    mutationFn: (formData) => blogService.update(formData, formData._id),
    onSuccess: () => {
      queryClient.invalidateQueries("editDestination");
      navigate("/catalog");
      toast.success("Successfully updated destination!");
    },
    onError: (error) => {
      navigate("/catalog");
      toast.error(`${error.message}`);
    },
  });

  const onSubmit = async (formData) => {
    // Prepare formData if necessary (e.g., handling images)
    const images = imageFields.filter((image) => image.trim() !== "");
    formData.images = images;

    // IMG CLEANER
    images.forEach((x, index) => {
      console.log(index);
      delete formData[`img${index + 1}`];
    });

    if (editData) {
      // Update existing destination
      formData._id = editData._id; // Assuming `_id` is the identifier for the destination
      updateDestinationMutation.mutate(formData);
    } else {
      // Create new destination
      addDestinationMutation.mutate(formData);
    }
  };

  return (
    <div className={styles.formContainer}>
      <h1 className={styles.title}>Blog Information</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("title")} type="text" placeholder="Title" />
        <input {...register("date")} type="date" placeholder="Date" />

        {imageFields.map((image, index) => (
          <input
            key={index}
            {...register(`img${index + 1}`)}
            type="text"
            value={image}
            onChange={(e) => handleImageChange(index, e.target.value)}
            placeholder={`Img ${index + 1}`}
          />
        ))}

        <button type="button" onClick={addImageField}>
          Add Image
        </button>

        <textarea
          {...register("description")}
          placeholder="Description"
          rows="20"
        ></textarea>

        <button type="submit">Create</button>

        {errors && (
          <p className="errorMsg">{errors[Object.keys(errors)[0]]?.message}</p>
        )}
      </form>
    </div>
  );
};

export default CreateBlog;
