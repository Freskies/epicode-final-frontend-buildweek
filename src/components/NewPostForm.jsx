import profilepic from "../assets/pics/profilepic.jpeg";

function NewPostForm() {
	return (
		<form className="new-post-form">
			<header className="new-post-header">
				{/* TODO profile image */}
				<img className="new-post-profile-image" src={profilepic} alt="" />
				<button className="btn-create-post">Crea un Post</button>
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
			</div>
		</form>
	);
}

export default NewPostForm;
