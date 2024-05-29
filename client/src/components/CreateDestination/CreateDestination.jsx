import { useForm } from "react-hook-form";
import { Toaster } from "react-hot-toast";

import styles from "./CreateDestinationStyles.module.css";

const CreateDestination = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    await new Promise((res) => setTimeout(res, 1000));
    console.log(data);
  };
  const errorMessage = Object.keys(errors)[0];

  return (
    <div className={styles.formContainer}>
      <h1 className={styles.title}>Destination informations</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("title", {
            required: "Title is required!",
            minLength: { value: 3, message: "MinLength 3 char" },
          })}
          type="text"
          placeholder="Title"
        />
        <input
          {...register("date", { required: "Date is required!" })}
          type="date"
          placeholder="Date"
        />
        <input
          {...register("price", { required: "Price is required!" })}
          type="number"
          placeholder="Price"
        />
        <input {...register("img1")} type="text" placeholder="Img 1" />
        <input {...register("img2")} type="text" placeholder="Img 2" />
        <textarea name="" id="" placeholder="Descriptions" rows="10"></textarea>

        <button disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send message"}
        </button>
        <div>
          {/* {errors.title && <p className="errorMsg">{errors.title.message}</p>} */}
          {errors && (
            <p className="errorMsg">{errors[errorMessage]?.message}</p>
          )}
        </div>
      </form>
      <Toaster />
    </div>
  );
};

export default CreateDestination;
