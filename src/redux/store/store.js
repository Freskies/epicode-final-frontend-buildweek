import { configureStore, combineReducers } from "@reduxjs/toolkit";
import profile from "../reducer/profile";

const store = configureStore({
	reducer: combineReducers({
		profile,
	}),
});

export default store;
