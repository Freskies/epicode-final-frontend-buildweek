import { useSelector } from "react-redux";
import cover from "../assets/pics/cover.jpg";
import Experiences from "./Experiences";
import "../assets/style/giulio3.css";
import OtherProfiles from "./OtherProfiles"

const Profile = () => {
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
			<aside className="other-profiles">
				<OtherProfiles />
			</aside>
		</main>
	);
};

export default Profile;
