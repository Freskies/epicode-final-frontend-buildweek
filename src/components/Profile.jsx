import { useSelector } from "react-redux";
// TEMP
import "./../assets/various-css/valerio.css";
import cover from "../assets/pics/cover.jpg";
import Experiences from "./Experiences";

const Settings = () => {
	// your profile
	const {
		name: firstName,
		surname: lastName,
		email,
		image: profileImage,
	} = useSelector(({ profile }) => profile);

	return (
		<main className="profile-main">
			<section className="my-profile">
				<figure className="profile-card">
					<img src={cover} alt="" className="profile-cover" />
					<img src={profileImage} alt="" className="profile-image" />
					<figcaption className="profile-info">
						<p className="profile-info__name">
							{firstName} {lastName}
						</p>
						<p className="profile-info__email">{email}</p>
					</figcaption>
					<div className="exps">
						<Experiences />
					</div>
				</figure>
			</section>
			<aside className="other-profiles"></aside>
		</main>
	);
};

export default Settings;
