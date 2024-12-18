import { useState } from "react";
import emptyIcon from "../assets/empi.jpeg";
import Modal from "./modale";

function NewPostForm() {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = () => {
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

	const handlePostSubmit = data => {
		console.log("Post inviato:", data);

		closeModal();
	};

	return (
		<div className="new-post-form">
			<header className="new-post-header">
				<img className="new-post-profile-image" src={emptyIcon} alt="" />
				<button type="button" onClick={openModal} className="btn-create-post">
					Crea un Post
				</button>
			</header>
			<div className="new-post-actions-container">
				<div className="action-wrapper">
					<i className="fa-solid fa-image pics "> </i>
					<p>Contenuti Multimediali</p>
				</div>
				<div className="action-wrapper">
					<i className="fa-solid fa-calendar-days calendar "> </i>
					<p>Eventi</p>
				</div>
				<div className="action-wrapper">
					<i className="fa-solid fa-newspaper paper "> </i>
					<p>Scrivi un articolo</p>
				</div>

				{isModalOpen && (
					<Modal onClose={closeModal} onPostSubmit={handlePostSubmit} />
				)}
			</div>
		</div>
	);
}

export default NewPostForm;
