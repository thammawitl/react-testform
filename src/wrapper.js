import React, { useState } from 'react';
import TestForm from './features/form/testform';
import TestForm2 from './features/form/testform2';
import { StoreReader } from './features/form/storereader'; // Value Display Component 

const Wrapper = () => {
	const [state, setState] = useState({
		submit: false
	})
	const submit = (values) => {
		setState({ ...state, submit: true, values })
	}
	
	return (
		<>
			<TestForm onSubmit={submit}></TestForm>
			<br>
			</br>
			<TestForm2></TestForm2>
			<br>
			</br>
			{state.submit && <StoreReader value={state} />}
		</>
	)
}

export default Wrapper;