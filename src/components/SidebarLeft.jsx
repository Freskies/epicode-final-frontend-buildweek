import { useSelector } from "react-redux";
import cover from "../assets/pics/cover.jpg";

const SidebarLeft = () => {
	const {
		name: firstName,
		surname: lastName,
		image: profileImage,
	} = useSelector(({ profile }) => profile);

	return (
		<aside className="profile">
			<figure className="aside-left-card aside-left-card--profile">
				<img className="cover" src={cover} alt="cover" />
				<img className="pic-profile" src={profileImage} alt="Profile" />

				<div className="user-info">
					<h2 className="user-name">
						{firstName} {lastName}
					</h2>
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
				<div className="profile-links">
					<p className="stat-label">
						<span>Trova lavoro più velocemente con Premium</span>
						<i className="fa-solid fa-star"></i>
					</p>
					<a href="#">
						<i className="fa-brands fa-linkedin"></i>
						<span>Prova per 0 EUR</span>
					</a>
					<hr />
					<a href="#">
						<i className="fa-solid fa-bookmark"></i>
						<span>Elementi salvati</span>
					</a>
				</div>
			</figure>
			<figure className="aside-left-card aside-left-card--events">
				<div className="linkcard">
					<div className="groups-events-containter">
						<a href="#">Gruppi</a>
					</div>
					<div className="groups-events-containter">
						<a id="eventi" href="#">
							Eventi
						</a>
						<a href="#">
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
