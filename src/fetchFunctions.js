import { STRIVE_STUDENT_API_KEY } from "./api_key";

// PROFILE

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



// OTHER PROFILES

export const getOtherProfiles = async (setterFn) => {
	try {
	  const response = await fetch(
		"https://striveschool-api.herokuapp.com/api/profile/",
		{
		  method: "GET",
		  headers: {
			Authorization: STRIVE_STUDENT_API_KEY,  
			"Content-Type": "application/json",
		  },
		}
	  )
  
	  if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)
  
	  const profiles = await response.json()
	  setterFn(profiles)  
	} catch (error) {
	  console.error("Errore nella fetch:", error)
	  throw error
	}
  }
  
// EXPERIENCES

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

export const deleteExperience = async (profileId, experienceId) => {
	try {
		const response = await fetch(
			`https://striveschool-api.herokuapp.com/api/profile/${profileId}/experiences/${experienceId}`,
			{
				method: "DELETE",
				headers: {
					Authorization: STRIVE_STUDENT_API_KEY,
					"Content-Type": "application/json",
				},
			},
		);

		if (!response.ok) throw new Error(`Errore HTTP: ${response.status}`);
	} catch (error) {
		console.error("Errore nell'eliminazione dell'esperienza:", error);
	}
};

// POSTS

export const getPosts = async setterFn => {
	try {
		const response = await fetch(
			`https://striveschool-api.herokuapp.com/api/posts/`,
			{
				method: "GET",
				headers: {
					Authorization: STRIVE_STUDENT_API_KEY,
					"Content-Type": "application/json",
				},
			},
		);
		if (!response.ok) throw new Error("Rejected");
		const posts = await response.json();
		setterFn(posts);
	} catch (error) {
		console.error("Errore nella fetch:", error);
		throw error;
	}
};

export const addPost = async ({ text, image }) => {
	try {
		const response = await fetch(
			`https://striveschool-api.herokuapp.com/api/posts/`,
			{
				method: "POST",
				headers: {
					Authorization: STRIVE_STUDENT_API_KEY,
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ text, image }),
			},
		);

		if (!response.ok) throw new Error(`Errore HTTP: ${response.status}`);
		const data = await response.json();
		console.log("POST inviato", data);
	} catch (error) {
		console.error("Errore:", error.message);
	}
};

// JOBS
