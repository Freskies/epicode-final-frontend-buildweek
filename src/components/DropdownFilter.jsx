import "./dropdown.css";
import { useState, useEffect, useRef } from "react";

function DropdownFilter({ onOptionSelect, selectedOption }) { // Modificato per ricevere selectedOption e onOptionSelect

  // Imposto il valore di default e lo stato del dropdown
  const [open, setOpen] = useState(false)
  const dropdownRef = useRef(null) // Crea un riferimento per il dropdown

  // Funzione che permette di aprire e chiudere il dropdown controllando se è falso o vero
  const toggleDropdown = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  // Funzione che va ad alterare il valore del dropdown
  const handleOptionSelect = (option) => {
    onOptionSelect(option) // Usa la funzione passata per aggiornare l'opzione selezionata
    setOpen(false)
  };

  // Funzione che gestisce l'evento per chiudere il dropdown se si clicca fuori
  useEffect(() => {
    const handleClickOutside = (event) => {
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
    <div ref={dropdownRef}> {/* Assegna il riferimento all'elemento del dropdown */}
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
          {selectedOption} {/* Usa il valore passato */}
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
          <div className="scelta" onClick={() => handleOptionSelect("più recenti per primi")}>
            <p>più recenti per primi</p>
          </div>
          <div className="scelta" onClick={() => handleOptionSelect("più rilevanti per primi")}>
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

export default DropdownFilter