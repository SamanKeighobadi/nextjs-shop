import React from "react";
import Head from "next/head";
// React components
import { Form, FormControl, FormGroup, Card, Button } from "react-bootstrap";
import Link from "next/link";

const Login = () => {
  return (
    <div className="d-flex justify-content-center">
      <Head>
        <title>Login </title>
      </Head>
     
        <Card className="mt-5 mx-2" style={{ width: "450px" }}>
          <Card.Header>Login</Card.Header>
          <Card.Body>
            <Form>
              <FormGroup className="mb-3">
                <Form.Label>email:</Form.Label>
                <FormControl type="email" placeholder="Email..." />
              </FormGroup>

              <FormGroup className="mb-1">
                <Form.Label>Password:</Form.Label>
                <FormControl type="password" placeholder="Password" />
              </FormGroup>
              <Form.Text>
                Dont have account? <Link href={'/register'} >Register</Link>
              </Form.Text>
              <br />
              <Button className='w-100  mt-3'>Submit</Button>
            </Form>
          </Card.Body>
        </Card>
      
    </div>
  );
};

export default Login;
