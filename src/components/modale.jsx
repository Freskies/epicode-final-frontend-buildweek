import "../assets/style/modale.css";
import { useState } from "react";

function Modal({ onClose, onPostSubmit }) {
	const [form, setForm] = useState({
		text: "",
	});
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const STRIVE_STUDENT_API_KEY =
		"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzVmZWM1ODBlYTI4NjAwMTUyOGI5MzQiLCJpYXQiOjE3MzQzMzk2NzMsImV4cCI6MTczNTU0OTI3M30.cJn22VGMuyvv9kcjRR5HjVco2gh8W9bucPNn2jYypkM";

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
					body: JSON.stringify({ text: form.text }),
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

	return (
		<div className="modal-position">
			<div className="modal-bg">
				<h2>Nuovo Post</h2>

				<form onSubmit={handleSubmit}>
					<input
						id="post"
						type="text"
						placeholder="Scrivi qualcosa"
						className="placeholder-modale"
						value={form.text}
						onChange={e => {
							const val = e.target.value;
							setForm({ ...form, text: val });
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
							disabled={loading || !form.text.trim()}
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
