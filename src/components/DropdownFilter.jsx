import "./dropdown.css";
import { useState } from "react";

function DropdownFilter({ posts }) {

  //imposto il valore di default e lo stato del dropdown
  const [open, setOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState("più recenti per primi")

  //funzione che permettere di aprire e chiudere il dropdown controllando se e fals o true
  const toggleDropdown = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  //funzione che va ad alterare il valore del dropdown
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setOpen(false);
  };

  // Funzione per ordinare i post in base all'opzione selezionata
  const sortedPosts = () => {
    if (selectedOption === "più rilevanti per primi") {
      return [...posts].sort((a, b) => b.relevance - a.relevance);
    }
    // Default: più recenti per primi
    return [...posts].sort((a, b) => new Date(b.date) - new Date(a.date));
  };

  return (
    <div>
      <div 
        onClick={toggleDropdown} 
        className={`dropdown-btn ${open ? "button-open" : ""}`}
      >
		<p className="riga">
			<hr/>
		</p>
		
		<p className="intro">
			Seleziona la visualizzazione del feed:
		</p>

			<span className="selection">
				{selectedOption}
			</span>
			<span>
			<svg 
				xmlns="http://www.w3.org/2000/svg" 
				width="16" 
				height="16" 
				fill="currentColor" 
				className="bi bi-caret-down-fill toggle-icon" 
				viewBox="0 0 16 16"
			>
				<path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
			</svg>
			</span>

      </div>

      {open && (
        <div className={`dropdown-content ${open ? "content-open" : ""}`}>
          <div onClick={() => handleOptionSelect("più recenti per primi")}>
            <p>più recenti per primi</p>
          </div>
          <div onClick={() => handleOptionSelect("più rilevanti per primi")}>
            <p>più rilevanti per primi</p>
          </div>
		  <p className="description">
		  	Questa opzione influirà soltanto sulla visualizzazione del tuo feed attuale su questo dispositivo. Puoi modificare la visualizzazione predefinita nelle Impostazioni.
		  </p>
        </div>
      )}
    </div>
  );
}

export default DropdownFilter;