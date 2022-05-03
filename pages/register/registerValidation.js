import * as yup from "yup";

export const registerValidation = yup.object().shape({
  name: yup
    .string()
    .required("name is required")
    .min("least than 5 char", 5)
    .max("more than 120 char", 120)
    .trim(),
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
  confirmPaasswrod: yup
    .string()
    .required("Confirm password is required")
    .oneOf([yup.ref("password"), null], "confirm password is not correct"),
});
