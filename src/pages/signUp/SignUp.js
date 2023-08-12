import React, { useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Input from "../../components/UI/input/Input";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const auth = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.authenticate) {
      // User is authenticated, navigate to the home page
      navigate("/", { replace: true });
    }
  }, [auth.authenticate]);
  return (
    <>
      <Container>
        <Row className="mt-5 d-flex justify-content-center">
          <Col md={6}>
            <Form>
              <Row>
                <Col md={6}>
                  <Input
                    label="First Name"
                    type="text"
                    name="fname"
                    value=""
                    placeholder="Enter first name"
                    onChange={() => {}}
                  />
                </Col>
                <Col md={6}>
                  <Input
                    label="Last Name"
                    type="text"
                    name="lname"
                    value=""
                    placeholder="Enter last name"
                    onChange={() => {}}
                  />
                </Col>
              </Row>
              <Input
                label="Email"
                type="email"
                name="lname"
                value=""
                placeholder="Enter email"
                onChange={() => {}}
              />
              <Input
                label="Password"
                type="text"
                name="password"
                value=""
                placeholder="Enter password"
                onChange={() => {}}
              />
              <Button variant="primary" type="button">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SignUp;
