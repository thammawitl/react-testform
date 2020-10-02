import React, { useState } from 'react'; // Impore React and useState
import { reduxForm, Field } from 'redux-form' // Form

const inputField = ({ input, label, type }) => (
	<div>
		<label>{label}</label>
		<div>
		<input {...input} placeholder={label} type={type}/>
		</div>
	</div>
)

const checkBox = ({ input, label, type}) => (
	<div>
		<label>{label}</label>
		<div>
			<input {...input} placeholder={label} type={type}/>
		</div>
	</div>
)

const required = value => (value ? null : 'Must Required')

let TestForm = (props) => {

	const [confirm, setConfirm] = useState(false);
	const { handleSubmit } = props;

	const checkboxValidator = (e) => {
		setConfirm(e.target.checked);
	}

	return (
		<>
			<form onSubmit={handleSubmit}>
				<Field name="name" type="text"
					component={inputField} label="Name"
				/>
				<Field name="mobile" type="number"
					component={inputField} label="Mobile"
				/>
				<Field name="email" type="email"
					component={inputField} label="Email"
				/>
				<Field name="confirm" type="checkbox"
					component={checkBox} label="Confirm"
					validate={[required]}
				/>
				{/* <label>
					State Validate
					<input type="checkbox" onClick={checkboxValidator} value={confirm} /> */}
					{/* Validate Checkbox using useState*/}
				{/* </label> */}
				<div>
					<button type="submit" disabled={props.invalid}>Submit</button>
				</div>
			</form>
		</>
	);
}

TestForm = reduxForm({form: 'TestForm'})(TestForm)

export default TestForm;