import PostModal from "./PostModal";
import { useSelector } from "react-redux";

function NewPostForm() {
	const modal = document.getElementById("post-modal");
	// const showModal = () => modal.showModal();
	const showModal = () => {};
	const closeModal = () => modal.closeModal();

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
				<button className="btn-create-post" onClick={showModal}>
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
				<PostModal onClose={closeModal} />
			</div>
		</div>
	);
}

export default NewPostForm;
