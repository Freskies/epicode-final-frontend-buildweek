export const SET_PROFILE = "SET_PROFILE";
export const FETCH_PROFILE_IF_NOT_EXIST = "FETCH_PROFILE_IF_NOT_EXIST";

export const setProfile = profile => ({
	type: SET_PROFILE,
	payload: profile,
});

export const fetchProfileIfNotExist = () => ({
	type: FETCH_PROFILE_IF_NOT_EXIST,
});
