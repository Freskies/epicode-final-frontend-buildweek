import { useState } from "react";
import profilepic from "../assets/empi.jpeg";
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
				{/* TODO profile image */}
				<img className="new-post-profile-image" src={profilepic} alt="" />
				<button className="btn-create-post" onClick={openModal}>
					Crea un Post
				</button>
			</header>
			<div className="new-post-actions-container">
				<div className="action-wrapper">
					<i className="fa-solid fa-image" data-btn="multimedia-contents"></i>
					<p>Contenuti Multimediali</p>
				</div>
				<div className="action-wrapper">
					<i className="fa-solid fa-calendar-days" data-btn="events"></i>
					<p>Eventi</p>
				</div>
				<div className="action-wrapper">
					<i className="fa-solid fa-newspaper" data-btn="write-article"></i>
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
