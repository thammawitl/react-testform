import React, { useState } from 'react'; // Impore React and useState
import { useDispatch, useSelector } from 'react-redux' // useDispatch allow calling Reducer methods
import { updateForm, updateCheck } from '../../store/reducer'; // Exported actions from createSlice()
import { StoreReader } from './storereader'; // Value Display Component 

let TestForm2 = (props) => {
	const [checked, setChecked] = useState(false);
	const [submit, setSubmit] = useState(false);
	const state = useSelector(state => state.form2)
	const dispatch = useDispatch();

	const onChangeHandler = (e) => {
		dispatch(updateForm({ value: e.target.value, key: e.target.name }))
	}

	const onChangeCheckHandler = (e) => {
		setChecked(e.target.checked)
		dispatch(updateCheck(checked)) // Not Necessary
	}

	const handleSubmit = (e) => {
		setSubmit(true);
		e.preventDefault();
	}

	return (
		<>
			<form onSubmit={handleSubmit}>
				<div>
					<label>
						Name:
						<input type="text" placeholder={state.name}  name="name" onChange={ onChangeHandler }/>
					</label>
				</div>
				<div>
					<label>
						Mobile:
						<input type="number" placeholder={state.mobile}  name="mobile" onChange={ onChangeHandler }/>
					</label>
				</div>
				<div>
					<label>
						Email:
						<input type="email" placeholder={state.email}  name="email" onChange={ onChangeHandler }/>
					</label>
				</div>
				<div>
					<label style={{ display: 'block' }}>
						Confirm:
						<input type="checkbox" onChange={ onChangeCheckHandler } checked={checked}></input>
					</label>
					<input type="submit" value="Submit" disabled={!checked}/>
				</div>
			</form>
			{ submit && <StoreReader/>}
		</>
	);
}

export default TestForm2;