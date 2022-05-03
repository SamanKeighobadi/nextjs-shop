import * as yup from "yup";

export const loginValidation = yup.object().shape({
  email: yup
    .string()
    .required("email is required")
    .email("Email is not valid")
    .trim(),
  password: yup
    .string()
    .required("Password is required")
    .min(4,"least than 4 char")
    .max(120, "more than 120 char")
    .trim(),
});
