import React from "react";
import Layout from "../../components/layout/Layout";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Input from "../../components/UI/input/Input";

const SignIn = () => {
	return (
		<>
			<Layout>
				<Container>
					<Row className="mt-5">
						<Col md={{ span: 6, offset: 3 }}>
							<Form>
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

export default SignIn;
