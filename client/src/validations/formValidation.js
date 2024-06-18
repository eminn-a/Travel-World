import * as yup from "yup";

export const createFormSchema = yup.object().shape({
  title: yup
    .string()
    .required("Title is missing")
    .min(3, "Title must be 3 chars atleast"),
  date: yup.string().required("Date is missing"),
  price: yup
    .number()
    .integer()
    .positive()
    .typeError("Price must be a number")
    .required("Please provide plan cost.")
    .min(1, "Too little price")
    .max(5000, "Very costly price!"),
  img1: yup.string().url().required("Please enter 2 images at least"),
  img2: yup.string().url().required("Please enter 2 images at least"),
  description: yup
    .string()
    .required("Description is missing")
    .min(170, "Description must be 170 chars atleast"),
});
