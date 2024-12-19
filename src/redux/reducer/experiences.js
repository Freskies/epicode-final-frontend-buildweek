import { SET_EXPERIENCES } from "./../action/experiences";

const initialState = [];

const profileReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case SET_EXPERIENCES:
			return payload;
		default:
			return state;
	}
};

export default profileReducer;
