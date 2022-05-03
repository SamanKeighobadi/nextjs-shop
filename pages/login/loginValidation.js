import * as yup from "yup";

export const loginValidation = yup.object().shop({
  email: yup
    .string()
    .required("email is required")
    .email("Email is not valid")
    .trim(),
  password: yup
    .string()
    .required("Password is required")
    .min("least than 4 char", 4)
    .max("more than 120 char", 120)
    .trim(),
});
