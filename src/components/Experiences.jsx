import { useState, useEffect, useCallback } from "react";
import { STRIVE_STUDENT_API_KEY } from "./../api_key";
import { useDispatch, useSelector } from "react-redux";
import { addExperience, getExperiences } from "./../fetchFunctions";
import { setExperiences } from "./../redux/action/experiences";

const Experiences = () => {
	const { _id: profileId } = useSelector(({ profile }) => profile);
	const experiences = useSelector(({ experiences }) => experiences);

	const dispatch = useDispatch();
	const setterExperiences = useCallback(
		experiences => dispatch(setExperiences(experiences)),
		[dispatch],
	);

	const [newExperience, setNewExperience] = useState({
		role: "",
		company: "",
		startDate: "",
		endDate: "",
		description: "",
		area: "",
	});

	// Aggiungi una nuova esperienza
	const handleAddExperience = async e => {
		e.preventDefault();
		addExperience(profileId, newExperience);
		getExperiences(profileId, setterExperiences);
	};

	// Gestisci cambiamenti nei campi del modulo
	const handleInputChange = e => {
		const { name, value } = e.target;
		setNewExperience(prev => ({ ...prev, [name]: value }));
	};

	// Elimina un'esperienza
	const deleteExperience = async expId => {
		try {
			const response = await fetch(
				`https://striveschool-api.herokuapp.com/api/profile/${profileId}/experiences/${expId}`,
				{
					method: "DELETE",
					headers: {
						Authorization: STRIVE_STUDENT_API_KEY,
						"Content-Type": "application/json",
					},
				},
			);

			if (!response.ok)
				throw new Error("Errore nell'eliminazione dell'esperienza");
			getExperiences(); // Ricarica le esperienze
		} catch (error) {
			console.error("Errore nell'eliminazione dell'esperienza:", error);
		}
	};

	useEffect(() => {
		getExperiences(profileId, setterExperiences);
	}, [profileId, setterExperiences]);

	return (
		<div className="experiences">
			<h3>Esperienze</h3>
			<div className="experience-list">
				{experiences.map(exp => (
					<div key={exp._id} className="experience-item">
						<h4>
							{exp.role} at {exp.company}
						</h4>
						<p>
							{exp.startDate} - {exp.endDate || "Present"}
						</p>
						<p>{exp.description}</p>
						<p>{exp.area}</p>

						<input type="file" onChange={e => handleImageUpload(e, exp._id)} />

						<button onClick={() => deleteExperience(exp._id)}>Elimina</button>
					</div>
				))}
			</div>

			<h4>Aggiungi una nuova esperienza</h4>
			<form onSubmit={handleAddExperience}>
				<input
					type="text"
					name="role"
					placeholder="Ruolo"
					value={newExperience.role}
					onChange={handleInputChange}
				/>
				<input
					type="text"
					name="company"
					placeholder="Azienda"
					value={newExperience.company}
					onChange={handleInputChange}
				/>
				<input
					type="date"
					name="startDate"
					placeholder="Data di inizio"
					value={newExperience.startDate}
					onChange={handleInputChange}
				/>
				<input
					type="date"
					name="endDate"
					placeholder="Data di fine"
					value={newExperience.endDate}
					onChange={handleInputChange}
				/>
				<textarea
					name="description"
					placeholder="Descrizione"
					value={newExperience.description}
					onChange={handleInputChange}
				></textarea>
				<input
					type="text"
					name="area"
					placeholder="Località"
					value={newExperience.area}
					onChange={handleInputChange}
				/>
				<button>Aggiungi Esperienza</button>
			</form>
		</div>
	);
};

export default Experiences;
