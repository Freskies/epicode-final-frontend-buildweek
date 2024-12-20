import { useCallback, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import "../assets/various-css/gabriele.css";
import { addPost, getPosts } from "./../fetchFunctions";
import { setPosts } from "../redux/action/posts";

Modal.propTypes = {
	isModalOpen: PropTypes.bool.isRequired,
	closeModal: PropTypes.func.isRequired,
};

const formStartingPoint = {
	text: "",
	imageUrl: "",
};

function Modal({ isModalOpen, closeModal }) {
	const [loading, setLoading] = useState(false);
	const ref = useRef();

	useEffect(() => {
		ref.current?.[isModalOpen ? "showModal" : "close"]();
	}, [isModalOpen]);

	// FROM HANDLING

	const [form, setForm] = useState(formStartingPoint);

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
		try {
			e.preventDefault();
			setLoading(true);
			await addPost(form);
			closeModal();
			setLoading(false);
			getPosts(setterPosts);
			setForm(formStartingPoint);
		} catch (error) {
			console.error(error);
		}
	};

	if (!isModalOpen) return null;

	return (
		<dialog className="post-modal" ref={ref} onCancel={closeModal}>
			<header className="new-post-header">
				<div className="modal-profile-wrapper">
					<img
						src={profileImage}
						alt={`${firstName} ${lastName}`}
						className="new-post-profile-image"
					/>
					<p className="new-post-profile-name">
						{firstName} {lastName}
					</p>
				</div>
				<button
					className="modal_btn modal_btn--close"
					type="button"
					onClick={closeModal}
					disabled={loading}
				>
					Chiudi
				</button>
			</header>

			<form className="modal-new-post-form" onSubmit={handleSubmit}>
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
				<button className="modal_btn modal_btn--post" type="submit">
					Pubblica
				</button>
			</form>
		</dialog>
	);
}

export default Modal;
