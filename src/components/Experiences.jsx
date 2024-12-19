import { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	addExperience,
	getExperiences,
	deleteExperience,
} from "./../fetchFunctions";
import { setExperiences } from "./../redux/action/experiences";
import Experience from "./Experience";

const Experiences = () => {
	const { _id: profileId } = useSelector(({ profile }) => profile);
	const experiences = useSelector(({ experiences }) => experiences);

	// FORM STATE
	const [newExperience, setNewExperience] = useState({
		role: "",
		company: "",
		startDate: "",
		endDate: "",
		description: "",
		area: "",
	});

	const handleInputChange = e => {
		const { name, value } = e.target;
		setNewExperience(prev => ({ ...prev, [name]: value }));
	};

	// REDUX ACTIONS

	const dispatch = useDispatch();
	const setterExperiences = useCallback(
		experiences => dispatch(setExperiences(experiences)),
		[dispatch],
	);

	const handleAddExperience = async e => {
		e.preventDefault();
		await addExperience(profileId, newExperience);
		await getExperiences(profileId, setterExperiences);
	};

	const handleDelete = async e => {
		e.preventDefault();
		const experienceId = e.target.dataset.experienceId;
		console.log(e.target.dataset);
		if (!experienceId) return;
		await deleteExperience(profileId, experienceId);
		await getExperiences(profileId, setterExperiences);
	};

	useEffect(() => {
		getExperiences(profileId, setterExperiences);
	}, [profileId, setterExperiences]);

	return (
		<div className="experiences">
			<div className="titlejob">
			<h3>Esperienze</h3>
			<ul className="experience-list" onClick={handleDelete}>
				{experiences.map(experience => (
					<Experience key={experience._id} experience={experience} />
				))}
			</ul>

				<hr/>
			<h4 className="addsexp">Aggiungi una nuova esperienza</h4>
			</div>
			<form className="new-experience-form" onSubmit={handleAddExperience}>
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
