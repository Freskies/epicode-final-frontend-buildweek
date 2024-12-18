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
					<h2 className="user-name">Truman Burbank</h2>
					<p className="user-title">Insure Manager | Seaheaven, USA</p>
					{/* TODO BORDER-BOTTOM */}
				<hr />
				</div>
				<div className="stats">
					<p>Collegamento</p>
					<p>123</p>
					<h3>Espandi la tua rete </h3>
					<p>500+</p>
				</div>

				<div className="profile-link">
					{/* TODO with box shadow or border */}
					<h4 className="stat-label">
						Trova lavoro più velocemente con <a href="#">Premium</a>
						<i className="fa-solid fa-star"></i>
					</h4>
					<p>Prova per 0 EUR</p>
					{/* TODO with box shadow or border */}
					<p className="paragraph">
						<i className="fa-solid fa-bookmark"></i>
						<a href="#"> Elementi salvati </a>
					</p>
				</div>
			</figure>
			<figure className="aside-left-card aside-left-card--events">
				<div className="linkcard">
					<div className="gruppieventi">
						<a href="#">Gruppi</a>
					</div>
					<div>
						<a href="#">Eventi</a>
					</div>
					<h3 className="scopri"> Scopri di più </h3>
				</div>
			</figure>
		</aside>
	);
};

export default SidebarLeft;
