import emptyIcon from "../assets/empi.jpeg";

function NewPostForm() {
	return (
		<form className="new-post-form">
			<header className="new-post-header">
				{/* TODO profile image */}
				<img className="new-post-profile-image" src={emptyIcon} alt="" />
				<button className="btn-create-post">Crea un Post</button>
			</header>
			<div className="new-post-actions-container">
				<div className="action-wrapper">
					<i className="fa-solid fa-image"> </i>
					<p>Contenuti Multimediali</p>
				</div>
				<div className="action-wrapper">
					<i className="fa-solid fa-calendar-days"> </i>
					<p>Eventi</p>
				</div>
				<div className="action-wrapper">
					<i className="fa-solid fa-newspaper"> </i>
					<p>Scrivi un articolo</p>
				</div>
			</div>
		</form>
	);
}

export default NewPostForm;
