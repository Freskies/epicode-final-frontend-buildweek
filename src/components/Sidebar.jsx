import "./sidebar.css";
import profilepic from "../assets/pics/profilepic.jpeg";
import cover from "../assets/pics/cover.jpg";
import { Link } from "react-router-dom";

const Sidebar = () => {
	return (
		<>
			{/* Immagine di copertina */}

			<figure className="profilecard">
				<img className="cover" src={cover} alt="cover" />
				<img className="pic-profile" src={profilepic} alt="Profile" />

				{/* Informazioni utente */}
				<div className="user-info">
					<h2 className="user-name">Mario Rossi</h2>
					<p className="user-title">Software Developer | Milano, Italia</p>
					<hr></hr>
				</div>

				{/* Statistiche */}
				<div className="stats">
					<div className="stat">
						<span className="stat-label">Collegamento</span>
						<span className="stat-value">123</span>
					</div>
					<div className="stat">
						<span className="stat-label">Connessioni:</span>
						<span className="stat-value">500+</span>
					</div>
				</div>

				{/* Link al profilo */}
				<div className="profile-link">
					<Link to="Settings">Visualizza il tuo profilo</Link>
					<hr className="divider" />
					<h4 className="stat-label">
						Trova lavoro più velocemente con <a>Premium</a>
						<i className="fa-solid fa-cloud-bolt"></i>
					</h4>
					<p>Prova per 0 EUR</p>
					<hr />
					<p className="paragraph">
						<i className="fa-solid fa-bookmark"></i> Elementi salvati
					</p>
				</div>

				<div className="linkcard">
					<div>
						<a href="#">Gruppi</a>
					</div>
					<div>
						<a href="#">Eventi</a>
					</div>
				</div>
			</figure>
		</>
	);
};

export default Sidebar;
