import { configureStore, combineReducers } from "@reduxjs/toolkit";
import profile from "../reducer/profile";
import posts from "../reducer/posts";
import experiences from "../reducer/experiences";
import otherProfiles from "../reducer/other-profiles";

const store = configureStore({
	reducer: combineReducers({
		profile,
		posts,
		experiences,
		otherProfiles,
	}),
});

export default store;
