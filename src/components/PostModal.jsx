import { useState, useEffect, useCallback } from "react";
import { setProfile } from "./../redux/action/profile";
import { useSelector, useDispatch } from "react-redux";
import { fetchProfileIfNotExist } from "./../fetchFunctions";
import { STRIVE_STUDENT_API_KEY } from "../api_key";
import "../assets/various-css/gabriele.css";

function Modal({ onClose, onPostSubmit }) {
	const {
		_id: profileId,
		name: firstName,
		surname: lastName,
		email,
		image: profileImage,
	} = useSelector(({ profile }) => profile);

	const dispatch = useDispatch();
	const setterProfile = useCallback(
		profile => dispatch(setProfile(profile)),
		[dispatch],
	);

	const [form, setForm] = useState({
		text: "",
		imageUrl: "",
	});
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const handleSubmit = async e => {
		e.preventDefault();
		setLoading(true);
		setError(null);

		try {
			const response = await fetch(
				`https://striveschool-api.herokuapp.com/api/posts/`,
				{
					method: "POST",
					headers: {
						Authorization: STRIVE_STUDENT_API_KEY,
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						text: form.text,
						image: form.imageUrl,
					}),
				},
			);

			if (!response.ok) {
				throw new Error("Errore durante l'invio del post");
			}

			const data = await response.json();

			onPostSubmit(data);
			onClose();
		} catch (err) {
			console.error("Errore:", err.message);
			setError(err.message);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchProfileIfNotExist(profileId, setterProfile);
	}, [profileId, setterProfile]);

	return (
		<div className="modal-position">
			<div className="modal-bg">
				<div className="identity-modale">
					<img
						src={profileImage}
						alt="profile-img"
						className="new-post-profile-image"
					/>
					<div className="modale-name">
						<h2>
							{firstName}
							{lastName}
						</h2>
					</div>
				</div>

				<form onSubmit={handleSubmit}>
					<textarea
						id="post"
						placeholder="Scrivi qualcosa di interessante...."
						className="placeholder-modale"
						value={form.text}
						onChange={e => {
							const val = e.target.value;
							setForm({ ...form, text: val });
						}}
					/>
					<input
						type="text"
						placeholder="Inserisci l'URL di un'immagine..."
						className="input-image-url"
						value={form.imageUrl}
						onChange={e => {
							const val = e.target.value;
							setForm({ ...form, imageUrl: val });
						}}
					/>
					{error && <p className="error-message">{error}</p>}
					<div className="modal-buttons">
						<button
							className="button-modale-close"
							type="button"
							onClick={onClose}
							disabled={loading}
						>
							Chiudi
						</button>
					</div>
					<div className="modal-buttons2">
						<button
							className="button-modale-post"
							type="submit"
							disabled={loading || !form.text.trim() || !form.imageUrl.trim()}
						>
							{loading ? "Caricamento..." : "Pubblica"}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default Modal;
