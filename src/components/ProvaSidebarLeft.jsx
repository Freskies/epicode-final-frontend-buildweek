import { useSelector } from "react-redux";
import { useEffect } from "react";
import cover from "../assets/pics/cover.jpg";
import "../assets/style/giulio3.css";

const SidebarLeft = () => {
	const {
		_id: userId,
		name,
		surname,
		image: profileImage,
	} = useSelector(({ profile }) => profile);

	useEffect(() => {
		const fetchData = async () => {
			const profileData = await fetchUserProfile(userId);
			if (profileData) {
				dispatch(setUserProfile(profileData));
			}
		};

		fetchData();
	}, [userId]);

	return (
		<aside className="profile">
			<figure className="aside-left-card aside-left-card--profile">
				<img className="cover" src={cover} alt="cover" />
				<img className="pic-profile" src={profileImage} alt="Profile" />
				<div className="user-info">
					<h2 className="user-name">
						{name} {surname}
					</h2>
					<p className="user-title">Insure Manager | Seaheaven, USA</p>
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
					<div className="section1">
						<p className="stat-label">
							<span>Trova lavoro più velocemente con Premium</span>
							<i className="fa-solid fa-star"></i>
						</p>
						<a href="#">
							<i className="fa-brands fa-linkedin"></i>
							<span>Prova per 0 EUR</span>
						</a>
					</div>
					<hr />
					<a className="saved" href="#">
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
