import PropTypes from "prop-types";

Experience.propTypes = {
	experience: PropTypes.shape({
		_id: PropTypes.string.isRequired,
		role: PropTypes.string.isRequired,
		company: PropTypes.string.isRequired,
		startDate: PropTypes.string.isRequired,
		endDate: PropTypes.string,
		description: PropTypes.string.isRequired,
		area: PropTypes.string.isRequired,
	}).isRequired,
};

function Experience({
	experience: { _id: id, role, company, startDate, endDate, description, area },
}) {
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

			<button data-experience-id={id}>Elimina</button>
		</li>
	);
}

export default Experience;
