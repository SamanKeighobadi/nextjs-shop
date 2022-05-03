import React from "react";
import Head from "next/head";
// React components
import { Form, FormControl, FormGroup, Card, Button } from "react-bootstrap";
import Link from "next/link";
// Formik
import { Formik } from "formik";
import { registerValidation } from "./registerValidation";

import { postData } from "../../utils/fetchData";


const Register = () => {


  const onSubmit = async (values, { setSubmitting }) => {
    setSubmitting(true);
    // console.log(values);
    const res = await postData('auth/register',values)
    console.log(res);
    setSubmitting(false);
  }

  return (
    <div className="d-flex justify-content-center">
      <Head>
        <title>Register</title>
      </Head>

      <Card className="mt-5 mx-2" style={{ width: "450px" }}>
        <Card.Header>Register</Card.Header>
        <Card.Body>
          <Formik
            initialValues={{
              name: "",
              email: "",
              password: "",
              confirmPassword: "",
            }}
            validationSchema={registerValidation}
            onSubmit={onSubmit}
          >
            {({
              values,
              touched,
              errors,
              handleBlur,
              handleChange,
              handleSubmit,
            }) => (
              <Form onSubmit={handleSubmit}>
                <FormGroup className="mb-3">
                  <Form.Label>Name:</Form.Label>
                  <FormControl
                    type="text"
                    placeholder="name..."
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.name && touched.name ? "error" : null}
                  />
                  {errors.name && touched.name ? (
                    <Form.Text className="text-danger">{errors.name}</Form.Text>
                  ) : null}
                </FormGroup>
                <FormGroup className="mb-3">
                  <Form.Label>email:</Form.Label>
                  <FormControl
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.email && touched.email ? "error" : null}
                  />
                  {errors.email && touched.email ? (
                    <Form.Text className="text-danger">
                      {errors.email}
                    </Form.Text>
                  ) : null}
                </FormGroup>
                <FormGroup className="mb-3">
                  <Form.Label>Password:</Form.Label>
                  <FormControl
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.password && touched.password ? "error" : null
                    }
                  />
                  {errors.password && touched.password ? (
                    <Form.Text className="text-danger">
                      {errors.password}
                    </Form.Text>
                  ) : null}
                </FormGroup>
                <FormGroup className="mb-1">
                  <Form.Label>Confirm Password:</Form.Label>
                  <FormControl
                    type="password"
                    placeholder="Confirm password"
                    name="confirmPassword"
                    value={values.confirmPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.confirmPassword && touched.confirmPassword
                        ? "error"
                        : null
                    }
                  />
                  {errors.confirmPassword && touched.confirmPassword ? (
                    <Form.Text className="text-danger">
                      {errors.confirmPassword}
                    </Form.Text>
                  ) : null}
                </FormGroup>
                <Form.Text>
                  have account? <Link href={"/login"}> Login </Link>
                </Form.Text>
                <br />
                <Button type="submit" className="mt-2 btn w-100">
                  Submit
                </Button>
              </Form>
            )}
          </Formik>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Register;
