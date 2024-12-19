import { SET_OTHER_PROFILES } from "./../action/other-profiles";

const initialState = [];

const profileReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case SET_OTHER_PROFILES:
			return payload;
		default:
			return state;
	}
};

export default profileReducer;
