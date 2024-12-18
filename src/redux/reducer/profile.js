import { SET_PROFILE } from "./../action/profile";

const initialState = {};

const profileReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case SET_PROFILE:
			return payload;
		default:
			return state;
	}
};

export default profileReducer;
