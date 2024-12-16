import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import profile from "../reducer/profile";

const rootReducer = combineReducers({
	profile,
});

const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
