import { useState } from "react";
import PropTypes from "prop-types";

Post.propTypes = {
	post: PropTypes.shape({
		username: PropTypes.string,
		updatedAt: PropTypes.string,
		text: PropTypes.string,
		image: PropTypes.string,
		user: PropTypes.shape({
			image: PropTypes.string,
			name: PropTypes.string,
			surname: PropTypes.string,
		}),
	}).isRequired,
};

function Post({
	post: {
		username,
		updatedAt,
		text,
		image,
		user: { image: profileImage, name: profileName, surname: profileSurname },
	},
}) {
	const [likeCount, setLikeCount] = useState(0);

	const like = () => {
		setLikeCount(prevCount => prevCount + 1);
	};
	return (
		<article className="post">
			<header className="post-header">
				<img
					className="post-profile-image"
					src={profileImage}
					alt={`${profileName} ${profileSurname} `}
				/>
				<div>
					<h3 className="author">
						{username.toUpperCase() || "Autore non disponibile"}
					</h3>
					<p>36.998 follower</p>

					<p>
						{updatedAt.slice(0, 10) + " " + updatedAt.slice(11, 17) ||
							"data non disponibile"}
					</p>
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
				<div
					className="action-wrapper"
					onClick={like}
					style={{ cursor: "pointer" }}
				>
					<i className="fa-regular fa-thumbs-up"></i>
					<p>Consiglia {likeCount > 0 && <span>({likeCount})</span>}</p>
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
