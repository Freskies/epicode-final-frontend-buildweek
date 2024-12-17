import "./sidebar.css";
import profilepic from "../assets/pics/profilepic.jpeg";
import cover from "../assets/pics/cover.jpg";
import { Link } from "react-router-dom";

const SidebarLeft = () => {
	return (
		<aside className="profile">
			<figure className="aside-left-card aside-left-card--profile">
				<img className="cover" src={cover} alt="cover" />
				<img className="pic-profile" src={profilepic} alt="Profile" />

				<div className="user-info">
					<h2 className="user-name">Mario Rossi</h2>
					<p className="user-title">Software Developer | Milano, Italia</p>
					{/* TODO BORDER-BOTTOM */}
				</div>

				<div className="stats">
					<p>Collegamento</p>
					<p>123</p>
					<p>Connessioni</p>
					<p>500+</p>
				</div>

				<div className="profile-link">
					<Link to="Settings">Visualizza il tuo profilo</Link>
					{/* TODO with box shadow or border */}
					<h4 className="stat-label">
						Trova lavoro più velocemente con <a>Premium</a>
						<i className="fa-solid fa-cloud-bolt"></i>
					</h4>
					<p>Prova per 0 EUR</p>
					{/* TODO with box shadow or border */}
					<p className="paragraph">
						<i className="fa-solid fa-bookmark"></i> Elementi salvati
					</p>
				</div>
			</figure>
			<figure className="aside-left-card aside-left-card--events">
				<div className="linkcard">
					<div>
						<a href="#">Gruppi</a>
					</div>
					<div>
						<a href="#">Eventi</a>
					</div>
				</div>
			</figure>
		</aside>
	);
};

export default SidebarLeft;
