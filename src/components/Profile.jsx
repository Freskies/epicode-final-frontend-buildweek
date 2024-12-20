import { useSelector } from "react-redux";
import cover from "../assets/gray-background.svg";
import Experiences from "./Experiences";
import "../assets/style/giulio3.css";
import OtherProfiles from "./OtherProfiles";

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
					<img className="profile-cover" src={cover} alt="cover grey" />
					<img src={profileImage} alt="" className="profile-image" />
					<figcaption className="profile-info">
						<p className="profile-info__name">
							{firstName} {lastName}
						</p>
						<p className="profile-info__email">{email}</p>
					</figcaption>
				</figure>
				<Experiences />
			</section>
			<OtherProfiles />
		</main>
	);
};

export default Profile;
