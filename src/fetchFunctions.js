import { STRIVE_STUDENT_API_KEY } from "./api_key";

export const fetchProfileIfNotExist = async (profileId, setterFn) => {
	try {
		// Check profile id
		if (profileId) return;

		// Fetch
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
	} catch (error) {
		console.error("Si è verificato un errore:", error);
		throw error;
	}
};

export const getExperiences = async (profileId, setterFn) => {
	try {
		const response = await fetch(
			`https://striveschool-api.herokuapp.com/api/profile/${profileId}/experiences`,
			{
				method: "GET",
				headers: {
					Authorization: STRIVE_STUDENT_API_KEY,
					"Content-Type": "application/json",
				},
			},
		);
		if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
		const experiences = await response.json();

		// set into redux store
		setterFn(experiences);
	} catch (error) {
		console.error("Si è verificato un errore:", error);
		throw error;
	}
};

export const addExperience = async (profileId, experience) => {
	try {
		const response = await fetch(
			`https://striveschool-api.herokuapp.com/api/profile/${profileId}/experiences`,
			{
				method: "POST",
				headers: {
					Authorization: STRIVE_STUDENT_API_KEY,
					"Content-Type": "application/json",
				},
				body: JSON.stringify(experience),
			},
		);

		if (!response.ok) throw new Error(`Errore HTTP: ${response.status}`);
		await response.json();
	} catch (error) {
		console.error("Errore nell'aggiunta dell'esperienza:", error);
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
