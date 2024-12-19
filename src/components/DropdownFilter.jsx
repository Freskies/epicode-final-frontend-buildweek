import "./dropdown.css";
import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

DropdownFilter.propTypes = {
	sortMethod: PropTypes.string.isRequired,
	setSortMethod: PropTypes.func.isRequired,
};

function DropdownFilter({ sortMethod, setSortMethod }) {
	const [open, setOpen] = useState(false);
	const dropdownRef = useRef(null);

	const toggleDropdown = () => setOpen(prevOpen => !prevOpen);

	const handleOptionSelect = e => {
		setSortMethod(e.target.closest("div").dataset.sortMethod);
		setOpen(false);
	};

	// click outside close the dropdown
	useEffect(() => {
		const handleClickOutside = event => {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
				setOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	return (
		<div ref={dropdownRef}>
			<div
				onClick={toggleDropdown}
				className={`dropdown-btn ${open ? "button-open" : ""}`}
			>
				<hr />
				<p className="intro">Seleziona la visualizzazione del feed:</p>
				<span className="selection">{sortMethod}</span>
				<span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						fill="currentColor"
						className="bi bi-caret-down-fill toggle-icon"
						viewBox="0 0 16 16"
					>
						<path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
					</svg>
				</span>
			</div>
			{open && (
				<div className={`dropdown-content ${open ? "content-open" : ""}`}>
					<div
						className="scelta"
						data-sort-method="più recenti per primi"
						onClick={handleOptionSelect}
					>
						<p>più recenti per primi</p>
					</div>
					<div
						className="scelta"
						data-sort-method="più rilevanti per primi"
						onClick={handleOptionSelect}
					>
						<p>più rilevanti per primi</p>
					</div>
					<p className="description">
						Questa opzione influirà soltanto sulla visualizzazione del tuo feed
						attuale su questo dispositivo. Puoi modificare la visualizzazione
						predefinita nelle Impostazioni.
					</p>
				</div>
			)}
		</div>
	);
}

export default DropdownFilter;
