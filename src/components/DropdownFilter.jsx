import "./dropdown.css"
import DropdownButton from "./DropdownButton";
import DropdownContent from "./DropdownContent";
import { useState } from "react";

function DropdownFilter() {

	const [open, setOpen] = useState(false)

	const toggleDropdown = () => {
		setOpen((open) => !open)
	}

	console.log(open)

	return <div>
		<DropdownButton 
			toogle = {toggleDropdown} 
			open = {open}
		/>
		<DropdownContent/>
	</div>;
}

export default DropdownFilter;
