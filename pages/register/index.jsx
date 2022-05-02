import React from "react";
import Head from "next/head";
// React components
import {
  Form,
  FormControl,
  FormGroup,
  Card,
  Button,
} from "react-bootstrap";

const Register = () => {
  return (
    <div className="d-flex justify-content-center">
      <Head>
        <title>Register</title>
      </Head>
      <Card className="mt-5 mx-2" style={{ width: "450px" }}>
        <Card.Header>Register form</Card.Header>
        <Card.Body>
          <Form >
            <FormGroup className="mb-3">
              <Form.Label>Name:</Form.Label>
              <FormControl type="text" placeholder="name" />
            </FormGroup>
            <FormGroup className="mb-3">
              <Form.Label>email:</Form.Label>
              <FormControl type="email" placeholder="Email" />
            </FormGroup>
            <FormGroup className="mb-3">
              <Form.Label>Password:</Form.Label>
              <FormControl type="password" placeholder="Password" />
            </FormGroup>
            <FormGroup className="mb-3">
              <Form.Label>Confirm Password:</Form.Label>
              <FormControl type="password" placeholder="Confirm password" />
            </FormGroup>
            <Button>Submit</Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Register;
