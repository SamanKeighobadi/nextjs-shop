import React,{useState} from "react";
import Head from "next/head";
// React components
import { Form, FormControl, FormGroup, Card, Button } from "react-bootstrap";
import Link from "next/link";
// Formik and yup
import { Formik } from "formik";
import { loginValidation } from "./loginValidation";

const Login = () => {

  const [submitting, setSubmitting] = useState(true);

  return (
    <div className="d-flex justify-content-center">
      <Head>
        <title>Login </title>
      </Head>

      <Card className="mt-5 mx-2" style={{ width: "450px" }}>
        <Card.Header>Login</Card.Header>
        <Card.Body>
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={loginValidation}
            onSubmit={(values, { setSubmitting }) => {
              
              console.log(values);
              setSubmitting(false)
            }}
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
                  <Form.Label>email:</Form.Label>
                  <FormControl
                    type="email"
                    placeholder="Email..."
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

                <FormGroup className="mb-1">
                  <Form.Label>Password:</Form.Label>
                  <FormControl
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.email && touched.email ? "error" : null}
                  />
                  {errors.password && touched.password ? (
                    <Form.Text className="text-danger">
                      {errors.password}
                    </Form.Text>
                  ) : null}
                </FormGroup>
                <Form.Text>
                  Dont have account? <Link href={"/register"}>Register</Link>
                </Form.Text>
                <br />
                <Button
                  type="submit"
                 disabled={submitting ? false:true}
                  className="w-100  mt-3"
                >
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

export default Login;
