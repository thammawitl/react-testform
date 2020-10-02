import { createSlice, combineReducers } from '@reduxjs/toolkit';
import { reducer as formReducer } from 'redux-form'

export const slice = createSlice({
	name: 'formControl',
	initialState: {
		name: 'Ouu',
		mobile: '0894567192',
		email: 'legativity@gmail.com',
		checkbox: false
	},
	reducers: {
		updateForm: (state, action) => {
			state[action.payload.key] = action.payload.value
		},
		updateCheck: (state, action) => {
			state.checkbox = action.payload;
		}
	},
});

export const { updateForm, updateCheck } = slice.actions;

export const getState = state => state;

//Redux Form
export default combineReducers({
	form: formReducer, //for Redux-Form
	form2: slice.reducer //for !Redux-Form State Management
})
