import { useCallback, useState } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import "../assets/various-css/gabriele.css";
import { addPost, getPosts } from "./../fetchFunctions";
import { setPosts } from "../redux/action/posts";

Modal.propTypes = {
	onClose: PropTypes.func.isRequired,
};

function Modal({ onClose }) {
	const [loading, setLoading] = useState(false);

	// FROM HANDLING

	const [form, setForm] = useState({
		text: "",
		imageUrl: "",
	});

	const {
		name: firstName,
		surname: lastName,
		image: profileImage,
	} = useSelector(({ profile }) => profile);

	// SUBMIT

	const dispatch = useDispatch();
	const setterPosts = useCallback(
		posts => dispatch(setPosts(posts)),
		[dispatch],
	);

	const handleSubmit = async e => {
		e.preventDefault();
		setLoading(true);
		await addPost(form);
		setLoading(false);
		onClose();
		getPosts(setterPosts);
	};

	return (
		<dialog className="modal-position">
			<div className="modal-bg">
				<header className="new-post-header">
					<img
						src={profileImage}
						alt={`${firstName} ${lastName}`}
						className="new-post-profile-image"
					/>
					<p className="new-post-profile-name">
						{firstName} {lastName}
					</p>
				</header>

				<form onSubmit={handleSubmit}>
					<textarea
						id="post"
						placeholder="Scrivi qualcosa di interessante...."
						className="new-post-text"
						value={form.text}
						onChange={e => setForm({ ...form, text: e.target.value })}
					/>
					<input
						type="text"
						placeholder="Inserisci l'URL di un'immagine..."
						className="input-image-url"
						value={form.imageUrl}
						onChange={e => setForm({ ...form, imageUrl: e.target.value })}
					/>
					<button
						className="button-modale-post"
						// disabled={loading || !form.text.trim() || !form.imageUrl.trim()}
						type="submit"
					>
						{loading ? "Caricamento..." : "Pubblica"}
					</button>
				</form>
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
			</div>
		</dialog>
	);
}

export default Modal;
