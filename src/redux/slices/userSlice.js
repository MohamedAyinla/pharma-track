import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
	name: 'user',
	initialState: {
		jwt: '',
		id: '',
		username: '',
		firstname: '',
		lastname: '',
		email: '',
	},
	reducers: {
		setUser: (state, action) => {
			state.jwt = action.payload.jwt;
			state.id = action.payload.id;
			state.username = action.payload.username;
			state.firstname = action.payload.firstname;
			state.lastname = action.payload.lastname;
			state.email = action.payload.email;
		},
		updateLocalUser: (state, action) => {
			state.id = action.payload.id;
			state.username = action.payload.username;
			state.firstname = action.payload.firstname;
			state.lastname = action.payload.lastname;
			state.email = action.payload.email;
		},
		removeUser: (state) => {
			state = userSlice.getInitialState();
			sessionStorage.clear();
			localStorage.clear();
		},
	},
});

export const { setUser, removeUser, updateLocalUser } =
	userSlice.actions;

export const getUser = (state) => state.user;

export default userSlice.reducer;
