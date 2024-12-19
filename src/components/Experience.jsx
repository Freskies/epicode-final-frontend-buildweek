import { useDispatch, useSelector } from "react-redux";
import { deleteExperience, getExperiences } from "../fetchFunctions";
import { setExperiences } from "./../redux/action/experiences";
import { useCallback } from "react";

function Experience({
	experience: { _id: id, role, company, startDate, endDate, description, area },
}) {
	const dispatch = useDispatch();
	const setterExperiences = useCallback(
		experiences => dispatch(setExperiences(experiences)),
		[dispatch],
	);

	const { _id: profileId } = useSelector(({ profile }) => profile);
	const handleDelete = async e => {
		e.preventDefault();
		deleteExperience(profileId, id);
		getExperiences(profileId, setterExperiences);
	};

	return (
		<li className="experience-item">
			<p>
				{role} at {company}
			</p>
			<p>
				{startDate} &mdash; {endDate || "Present"}
			</p>
			<p>{description}</p>
			<p>{area}</p>

			<button onClick={handleDelete}>Elimina</button>
		</li>
	);
}

export default Experience;
