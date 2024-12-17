import emptyIcon from "../assets/empi.jpeg";

function Post({ post: { username, updatedAt, text, image } }) {
	return (
		<article className="post">
			<header className="post-header">
				<img
					className="post-profile-image"
					src={emptyIcon}
					alt="image non found"
				/>
				<div>
					<h3 className="author">
						{username.toUpperCase() || "Autore non disponibile"}
					</h3>
					<p>36.998 follower</p>

					<p>{updatedAt.slice(0, 10) || "data non disponibile"}</p>
				</div>
			</header>
			<main className="post-body">
				<p>{text || "Contenuto non disponibile"}</p>

				{image && (
					<img className="post-image" src={image} alt="Immagine del post" />
				)}
			</main>

			{/* TODO make a border bottom or a box shadow */}
			<footer className="post-footer">
				<div className="action-wrapper">
					<i className="fa-regular fa-thumbs-up"></i>
					<p>Consiglia</p>
				</div>
				<div className="action-wrapper">
					<i className="fa-regular fa-comment"></i>
					<p>Commenta</p>
				</div>
				<div className="action-wrapper">
					<i className="fa-regular fa-paper-plane"></i>
					<p>invia</p>
				</div>
				<div className="action-wrapper">
					<i className="fa-solid fa-share"></i>
					<p>Condividi</p>
				</div>
			</footer>
		</article>
	);
}

export default Post;
