import { useState } from "react";
import PostModal from "./PostModal";
import { useSelector } from "react-redux";

function NewPostForm() {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const openModal = () => setIsModalOpen(true);
	const closeModal = () => setIsModalOpen(false);

	const {
		name: firstName,
		surname: lastName,
		image: profileImage,
	} = useSelector(({ profile }) => profile);

	return (
		<div className="new-post-form">
			<header className="new-post-header">
				<img
					className="post-profile-image"
					src={profileImage}
					alt={`${firstName} ${lastName}`}
				/>
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
				<PostModal isModalOpen={isModalOpen} closeModal={closeModal} />
			</div>
		</div>
	);
}

export default NewPostForm;
