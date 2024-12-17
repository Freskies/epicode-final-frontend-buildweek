import emptyIcon from "../assets/empi.jpeg";

function NewPostForm() {
	return (
		<form className="new-post-form">
			<header className="postTop">
				<img src={emptyIcon} alt="" />
				<button>Crea un Post </button>
			</header>
			<div className="postBottom">
				<div className="font">
					<i className="fa-solid fa-image"> </i>
					<p>Contenuti Multimediali</p>
				</div>
				<div className="font">
					<i className="fa-solid fa-calendar-days"> </i>
					<p>Eventi</p>
				</div>
				<div className="font">
					<i className="fa-solid fa-newspaper"> </i>
					<p>Scrivi un articolo</p>
				</div>
			</div>
		</form>
	);
}

export default NewPostForm;
