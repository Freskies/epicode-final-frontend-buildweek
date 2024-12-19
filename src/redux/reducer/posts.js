import { SET_POSTS } from "./../action/posts";

const initialState = [];

const profileReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case SET_POSTS:
			return payload;
		default:
			return state;
	}
};

export default profileReducer;
