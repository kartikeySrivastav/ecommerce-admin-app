import React from "react";
import Layout from "../../components/layout/Layout";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Input from "../../components/UI/input/Input";

const SignUp = () => {
	return (
		<>
			<Layout>
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
			</Layout>
		</>
	);
};

export default SignUp;
