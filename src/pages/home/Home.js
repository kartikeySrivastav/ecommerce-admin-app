import React from "react";
import "./home.css";
import Layout from "../../components/layout/Layout";
import { Container } from "react-bootstrap";

const Home = () => {
	return (
		<>
			<Layout>
				<Container>
					<div className="jumbotron">
						<h1>Welcome to Admin Dashboard</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Totam, soluta. Dolor adipisci numquam
							laboriosam cumque debitis et, itaque in. At
							consectetur nam alias delectus corporis commodi
							laborum perspiciatis quis quidem inventore sapiente
							nesciunt officia ut error beatae, molestias itaque
							magni.
						</p>
					</div>
				</Container>
			</Layout>
		</>
	);
};

export default Home;
