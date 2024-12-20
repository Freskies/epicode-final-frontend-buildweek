import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOtherProfiles } from "../fetchFunctions";
import { setOtherProfiles } from "../redux/action/other-profiles";
import Loading from "./Loading";
import "../assets/style/giulio3.css"
const OtherProfiles = () => {

	const [error, setError] = useState(false);
	const otherProfiles = useSelector(({ otherProfiles }) => otherProfiles);
	console.log(otherProfiles);
	const dispatch = useDispatch();
	const setterOtherProfiles = useCallback(
		otherProfiles => dispatch(setOtherProfiles(otherProfiles)),
		[dispatch],
	);

	useEffect(() => {
		if (otherProfiles.length) return;
		try {
			getOtherProfiles(setterOtherProfiles);
		} catch {
			setError(true);
		}
	}, [setOtherProfiles, otherProfiles.length]);
	if (error) return <p>We&apos;re sorry an error is occured</p>;

	if (!otherProfiles.length) return <Loading />;
	return (
		<div>
			<aside className="other-profiles">
				<h2>Other Profiles</h2>

				<ul className="others-ul">
					{otherProfiles.slice(0,18).map(profile => {
						console.log(profile);
						return (
							<li key={profile._id} className="profile-item">
								<img
									src={profile.image}
									alt={`${profile.name}'s avatar`}
									className="profile-avatar"
								/>
								<div>
									<h3>{profile.name}</h3>
									<p>{profile.bio}</p>
								</div>
							</li>
						);
					})}
				</ul>
			</aside>
		</div>
	);
};

export default OtherProfiles;
