import { useState } from "react";
import PostModal from "./PostModal";
import { useSelector } from "react-redux";

function NewPostForm() {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const openModal = () => setIsModalOpen(true);
	const closeModal = () => setIsModalOpen(false);

	const handlePostSubmit = data => {
		console.log("Post inviato:", data);
		closeModal();
	};

	const {
		name: firstName,
		surname: lastName,
		email,
		image: profileImage,
	} = useSelector(({ profile }) => profile);

	return (
		<div className="new-post-form">
			<header className="new-post-header">
<<<<<<< Updated upstream
<<<<<<< Updated upstream
				<img
					className="new-post-profile-image"
					src={profileImage}
					alt="profile"
				/>
=======
				<img className="post-profile-image" src={profileImage} alt="profile" />
>>>>>>> Stashed changes
=======
				<img className="post-profile-image" src={profileImage} alt="profile" />
>>>>>>> Stashed changes
				<button className="btn-create-post" onClick={openModal}>
					Crea un Post
				</button>
			</header>
			<div className="new-post-actions-container">
				<div className="action-wrapper">
					<i className="fa-solid fa-image" data-btn="multimedia-contents"></i>
					<a href="#">
						<p>Contenuti Multimediali</p>
					</a>
				</div>
				<div className="action-wrapper">
					<i className="fa-solid fa-calendar-days" data-btn="events"></i>
					<a href="#">
						<p>Eventi</p>{" "}
					</a>
				</div>
				<div className="action-wrapper">
					<i className="fa-solid fa-newspaper" data-btn="write-article"></i>
					<a href="#">
						{" "}
						<p>Scrivi un articolo</p>{" "}
					</a>
				</div>

				{isModalOpen && (
					<PostModal onClose={closeModal} onPostSubmit={handlePostSubmit} />
				)}
			</div>
		</div>
	);
}

export default NewPostForm;
