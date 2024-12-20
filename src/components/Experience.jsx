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
	const startDateD = new Date(startDate).toLocaleDateString();
	const endDateD = endDate && new Date(endDate).toLocaleDateString();

	return (
		<li className="experience-item">
			<div className="experience-info">
				<p className="experience-role">
					<em>{role}</em> at <em>{company}</em> ({area})
				</p>

				<p className="experience-description">{description}</p>
				<p className="experience-dates">
					{startDateD} &mdash; {endDateD || "Present"}
				</p>
			</div>
			<button className="delete-exp-btn" data-experience-id={id}>
				<i className="fas fa-trash-alt"></i>
			</button>
		</li>
	);
}

export default Experience;
