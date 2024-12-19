import { useDispatch, useSelector } from "react-redux";
import { deleteExperience } from "../fetchFunctions";

function Experience({
	experience: { _id: id, role, company, startDate, endDate, description, area },
}) {
	const { _id: profileId } = useSelector(({ profile }) => profile);
	const dispatch = useDispatch();

	return (
		<li className="experience-item">
			<p>
				{role} at {company}
			</p>
			<p>
				{startDate} - {endDate || "Present"}
			</p>
			<p>{description}</p>
			<p>{area}</p>

			<button
				onClick={() => {
					deleteExperience(profileId, id);
				}}
			>
				Elimina
			</button>
		</li>
	);
}

export default Experience;
