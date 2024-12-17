import "../assets/style/modale.css";

function Modal({ onClose }) {
	return (
		<div className="modal-position">
			<div className="modal-bg">
				<h2>Nuovo Post</h2>
				<div>
					<input
						type="text"
						placeholder="Scrivi qualcosa"
						className="placeholder-modale"
					></input>
				</div>

				<button onClick={onClose} className="button-modale">
					Chiudi
				</button>
				<button className="button-modale">Posta</button>
			</div>
		</div>
	);
}

export default Modal;
