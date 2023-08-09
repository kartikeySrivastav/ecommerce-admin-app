import React from "react";
import { Form } from "react-bootstrap";

const Input = (props) => {
	return (
		<Form.Group className="mb-3">
			<Form.Label>{props.label}</Form.Label>
			<Form.Control
				type={props.type}
				name={props.name}
				value={props.value}
				placeholder={props.placeholder}
				onChange={props.onChange}
			/>
			<Form.Text className="text-muted">{props.errorMessage}</Form.Text>
		</Form.Group>
	);
};

export default Input;
