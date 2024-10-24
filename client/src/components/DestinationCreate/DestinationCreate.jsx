import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState, useEffect } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import styles from "./DestinationCreateStyles.module.css";
import { createFormSchema } from "../../validations/formValidation";
import * as destinationServices from "../../services/destinationServices";
import formatFormDate from "../../utils/formatFormDate";

const DestinationCreate = ({ editData }) => {
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
    resolver: yupResolver(createFormSchema),
    defaultValues: editData
      ? {
          title: editData.title,
          date: formatFormDate(editData.date),
          price: editData.price,
          description: editData.description,
          ...editData.images.reduce((acc, image, index) => {
            acc[`img${index + 1}`] = image;
            return acc;
          }, {}),
        }
      : {},
  });

  const addDestinationMutation = useMutation({
    mutationFn: (formData) => destinationServices.create(formData),
    onSuccess: () => {
      navigate("/catalog");
      toast.success("Successfully added new destination!");
    },
    onError: (error) => {
      navigate("/catalog");
      toast.error(`${error.message}`);
    },
  });

  const updateDestinationMutation = useMutation({
    mutationFn: (formData) =>
      destinationServices.update(formData, formData._id),
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

    if (editData) {
      formData._id = editData._id; // Assuming `_id` is the identifier for the destination
      updateDestinationMutation.mutate(formData);
    } else {
      addDestinationMutation.mutate(formData);
    }
  };

  return (
    <div className={styles.formContainer}>
      <h1 className={styles.title}>Destination Information</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("title")} type="text" placeholder="Title" />
        <input {...register("date")} type="date" placeholder="Date" />
        <input {...register("price")} type="number" placeholder="Price" />

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
          rows="10"
        ></textarea>

        <button type="submit">Create</button>

        {errors && (
          <p className="errorMsg">{errors[Object.keys(errors)[0]]?.message}</p>
        )}
      </form>
    </div>
  );
};

export default DestinationCreate;
