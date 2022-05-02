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
import Link from "next/link";

const Register = () => {
  return (
    <div className="d-flex justify-content-center">
      <Head>
        <title>Register</title>
      </Head>
      <Card className="mt-5 mx-2" style={{ width: "450px" }}>
        <Card.Header>Register</Card.Header>
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
            <FormGroup className="mb-1">
              <Form.Label>Confirm Password:</Form.Label>
              <FormControl type="password" placeholder="Confirm password" />
            </FormGroup>
            <Form.Text  >
                have account? <Link href={"/login"}> Login </Link>
            </Form.Text>
            <br />
            <Button className="mt-2 btn w-100" >Submit</Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Register;
