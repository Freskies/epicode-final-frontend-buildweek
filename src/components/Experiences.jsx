import { useState, useEffect } from "react";
import "../assets/style/giulio3.css"
const Experiences = ({ token, userId }) => {
	const [experiences, setExperiences] = useState([]);
	const [newExperience, setNewExperience] = useState({
		role: "",
		company: "",
		startDate: "",
		endDate: "",
		description: "",
		area: "",
	});

	const [image, setImage] = useState(null);

	// Recupera le esperienze dell'utente
	const getExperiences = async () => {
		try {
			const response = await fetch(
				`https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences`,
				{
					method: "GET",
					headers: {
						Authorization: `Bearer ${token}`,
						"Content-Type": "application/json",
					},
				},
			);

			if (!response.ok) throw new Error(`Errore HTTP: ${response.status}`);
			const data = await response.json();
			setExperiences(data);
		} catch (error) {
			console.error("Errore nel recupero delle esperienze:", error);
		}
	};

	// Aggiungi una nuova esperienza
	const addExperience = async e => {
		e.preventDefault();
		try {
			const response = await fetch(
				`https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences`,
				{
					method: "POST",
					headers: {
						Authorization: `Bearer ${token}`,
						"Content-Type": "application/json",
					},
					body: JSON.stringify(newExperience),
				},
			);

			if (!response.ok) throw new Error(`Errore HTTP: ${response.status}`);
			await response.json();
			getExperiences(); // Ricarica le esperienze
		} catch (error) {
			console.error("Errore nell'aggiunta dell'esperienza:", error);
		}
	};

	// Gestisci cambiamenti nei campi del modulo
	const handleInputChange = e => {
		const { name, value } = e.target;
		setNewExperience(prev => ({ ...prev, [name]: value }));
	};

	// Carica un'immagine per l'esperienza
	const handleImageUpload = async (e, expId) => {
		const formData = new FormData();
		formData.append("experience", e.target.files[0]);

		try {
			const response = await fetch(
				`https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences/${expId}/picture`,
				{
					method: "POST",
					headers: {
						Authorization: `Bearer ${token}`,
					},
					body: formData,
				},
			);

			if (!response.ok) throw new Error("Errore nel caricamento dell'immagine");
			getExperiences(); // Ricarica le esperienze
		} catch (error) {
			console.error("Errore nel caricamento dell'immagine:", error);
		}
	};

	// Elimina un'esperienza
	const deleteExperience = async expId => {
		try {
			const response = await fetch(
				`https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences/${expId}`,
				{
					method: "DELETE",
					headers: {
						Authorization: `Bearer ${token}`,
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

	// Carica le esperienze al montaggio del componente
	useEffect(() => {
		getExperiences();
	}, []);

	return (
		<div className="experiences">
			<h3 className="exp1">Esperienze</h3>

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

			<h4 className="exp2">Aggiungi una nuova esperienza</h4>
			<form className="exp-form" onSubmit={addExperience}>
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
				<button type="submit">Aggiungi Esperienza</button>
			</form>
		</div>
	);
};

export default Experiences;
