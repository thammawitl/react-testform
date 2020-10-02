import React from 'react'
import { getState } from '../../store/reducer';
import { useSelector } from 'react-redux'

export const StoreReader = (props) => {
	const form1 = JSON.stringify(useSelector(state => state.form))
	const form2 = JSON.stringify(useSelector(state => state.form2))
	return (
		<>
			<p>Data received from Redux-Form - {JSON.stringify(props)} </p>
			<div><p>Data get from Redux-Form - {form1}</p></div>
			<div><p>Data get from React-Redux - {form2}</p></div>
		</>
	);
}