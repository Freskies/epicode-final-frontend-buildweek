import "../assets/style/mainCard.css";
import { useState, useEffect } from "react";
import empti_jpeg from "../assets/empi.jpeg";

const Maincard = () => {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		const fetchPosts = async () => {
			try {
				const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzVmZWM1ODBlYTI4NjAwMTUyOGI5MzQiLCJpYXQiOjE3MzQzMzk2NzMsImV4cCI6MTczNTU0OTI3M30.cJn22VGMuyvv9kcjRR5HjVco2gh8W9bucPNn2jYypkM`;
				const response = await fetch(
					`https://striveschool-api.herokuapp.com/api/posts/`,
					{
						method: "GET",
						headers: {
							Authorization: `Bearer ${token}`,
							"Content-Type": "application/json",
						},
					},
				);
				if (response.ok) {
					const data = await response.json();
					setPosts(data);
					console.log(data);
				} else {
					console.error("Errore nella risposta API");
				}
			} catch (err) {
				console.error("Errore nella fetch:", err);
			}
		};

		fetchPosts();
	}, []);
	return (
		<>
			<div className="postDiv">
				<div className="postTop">
					<img src={empti_jpeg} alt="" />
					<button>Crea un Post </button>
				</div>
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
			</div>

			<div>
				{posts.length > 0 &&
					posts.slice(34, 79).map((post, index) => (
						<div key={post._id || index} className="cardMain">
							<div className="cardTop">
								<div>
									<img src={empti_jpeg} alt="image non found" />
								</div>
								<div>
									<h1 className="author">
										{post.username.toUpperCase() || "Autore non disponibile"}
									</h1>
									<p>36.998 follower</p>

									<p>{post.updatedAt.slice(0, 10) || "data non disponibile"}</p>
								</div>
							</div>

							<h2>{post.text || "Contenuto non disponibile"}</h2>
							{post.image && <img src={post.image} alt="Immagine del post" />}
							<hr />
							<div className="cardBottom">
								<div className="font">
									<i className="fa-regular fa-thumbs-up"></i>
									<p>Consiglia</p>
								</div>
								<div className="font">
									<i className="fa-regular fa-comment"></i>
									<p>Commenta</p>
								</div>
								<div className="font">
									<i className="fa-regular fa-paper-plane"></i>
									<p>invia</p>
								</div>
								<div className="font">
									<i className="fa-solid fa-share"></i>
									<p>Condividi</p>
								</div>
							</div>
						</div>
					))}
			</div>
		</>
	);
};

export default Maincard;
