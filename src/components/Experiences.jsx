import { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addExperience, getExperiences } from "./../fetchFunctions";
import { setExperiences } from "./../redux/action/experiences";
import Experience from "./Experience";

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

	const handleAddExperience = async e => {
		e.preventDefault();
		addExperience(profileId, newExperience);
		getExperiences(profileId, setterExperiences);
	};

	const handleInputChange = e => {
		const { name, value } = e.target;
		setNewExperience(prev => ({ ...prev, [name]: value }));
	};

	useEffect(() => {
		getExperiences(profileId, setterExperiences);
	}, [profileId, setterExperiences]);

	return (
		<div className="experiences">
			<h3>Esperienze</h3>
			<ul className="experience-list">
				{experiences.map(experience => (
					<Experience key={experience._id} experience={experience} />
				))}
			</ul>

			<h4>Aggiungi una nuova esperienza</h4>
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
