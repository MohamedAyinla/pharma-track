import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
	name: 'user',
	initialState: {
		jwt: '',
		id: '',
		username: '',
		fullname: '',
		email: '',
		category: '',
	},
	reducers: {
		setUser: (state, action) => {
			state.jwt = action.payload.jwt;
			state.id = action.payload.id;
			state.username = action.payload.username;
			state.fullname = action.payload.fullname;
			state.email = action.payload.email;
			state.category = action.payload.category;
		},
		updateLocalUser: (state, action) => {
			state.username = action.payload.username;
			state.fullname = action.payload.fullname;
			state.email = action.payload.email;
		},
		removeUser: (state) => {
			state = userSlice.getInitialState();
			sessionStorage.clear();
			localStorage.clear();
		},
	},
});

export const { setUser, removeUser, updateLocalUser } = userSlice.actions;

export const getUser = (state) => state.user;

export default userSlice.reducer;
