import { STRIVE_STUDENT_API_KEY } from "./api_key";

export const fetchProfileIfNotExist = async (
	profileId,
	setterFn,
	log = false,
) => {
	try {
		// Check profile id
		if (profileId) {
			if (log) console.log("profile alrady exist");
			return;
		}

		// Fetch
		if (log) console.log("start fetch");
		const response = await fetch(
			"https://striveschool-api.herokuapp.com/api/profile/me",
			{
				method: "GET",
				headers: {
					Authorization: STRIVE_STUDENT_API_KEY,
					"Content-Type": "application/json",
				},
			},
		);
		if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
		const profile = await response.json();

		// set into redux store
		setterFn(profile);
		console.log(profile);
	} catch (error) {
		console.error("Si è verificato un errore:", error);
		throw error;
	} finally {
		if (log) console.log("finish fetch");
	}
};

// other profiles boilerplate
// Profiles
// useEffect(() => {
// 	(async () => {
// 		try {
// 			const response = await fetch("https://striveschool-api.herokuapp.com/api/profile/", {
// 				method: "GET",
// 				headers: {
// 					Authorization: STRIVE_STUDENT_API_KEY,
// 					"Content-Type": "application/json",
// 				},
// 			});

// 			if (!response.ok) {
// 				throw new Error(`HTTP error! status: ${response.status}`);
// 			}

// 			const profiles = await response.json();

// 			console.log(profiles);
// 		} catch (error) {
// 			console.error("Si è verificato un errore:", error);
// 		}
// 	})();
// }, []);
