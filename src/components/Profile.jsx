import { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProfileIfNotExist } from "./../fetchFunctions";
import { setProfile } from "./../redux/action/profile";
// TEMP
import "./../assets/various-css/valerio.css";
import cover from "../assets/pics/cover.jpg";

const Settings = () => {
	// your profile
	const {
		_id: profileId,
		name: firstName,
		surname: lastName,
		email,
		image: profileImage,
	} = useSelector(({ profile }) => profile);

	const dispatch = useDispatch();
	const setterProfile = useCallback(
		profile => dispatch(setProfile(profile)),
		[dispatch],
	);

	// TODO others profile

	console.log("POLLO", firstName);

	// Profile
	useEffect(() => {
		fetchProfileIfNotExist(profileId, setterProfile);
	}, [profileId, setterProfile]);

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
				</figure>
			</section>
			<aside className="other-profiles"></aside>
		</main>
	);
};

export default Settings;
