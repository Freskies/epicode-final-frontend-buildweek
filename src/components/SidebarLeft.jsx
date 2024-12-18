import profilepic from "../assets/pics/profilepic.jpeg";
import cover from "../assets/pics/cover.jpg";
import { Link } from "react-router-dom";
import "../assets/style/giulio2.css";
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
				<hr />
				<div className="profile-link">
					{/* TODO with box shadow or border */}
					<p className="stat-label">
						Trova lavoro più velocemente con Premium
						<i className="fa-solid fa-star"></i>
					</p>
					<div className="provaper">
						<a href="#">
							<p>
								{" "}
								<i className="fa-brands fa-linkedin"></i> Prova per 0 EUR
							</p>
						</a>
					</div>
					<hr />
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
					<div className="gruppieventi">
						<a id="eventi" href="#">
							Eventi
						</a>
						<a href="#">
							{" "}
							<i className="fa-solid fa-plus plusicon"></i>
						</a>
					</div>
					<hr />
					<a href="#">
						<p className="scopri"> Scopri di più </p>
					</a>
				</div>
			</figure>
		</aside>
	);
};

export default SidebarLeft;
