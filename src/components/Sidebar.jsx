import React from "react";
import "./sidebar.css"; // Importa il file CSS
import profilepic from "../assets/pics/profilepic.jpeg";
import cover from "../assets/pics/cover.jpg";

const Sidebar = () => {
	return (
		<>
			{/* Immagine di copertina */}

			<div className="profilecard">
				<img className="cover" src={cover} alt="cover" />
				{/* Foto del profilo */}

				<img className="picprofile" src={profilepic} alt="Profile" />

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
					<a href="#">Visualizza il tuo profilo</a>
					<hr className="divider" />
					<h4 className="stat-label">
						Trova lavoro più velocemente con Premium
					</h4>
					<p>Prova per 0 EUR</p>
					<hr />
					<p>Elementi salvati</p>
				</div>

				<div className="card">
					<p>Gruppi</p>
					<p>Eventi</p>
				</div>
			</div>
		</>
	);
};

export default Sidebar;