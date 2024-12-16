import "../assets/style/Aside.right.css";
import square_png from "../assets/square.svg";
import square_png2 from "../assets/square2.svg";
import women_png from "../assets/women.png";
import linkedin_png from "../assets/linkedin.svg";

const Aside_right = () => {
	return (
		<>
			<div className="cardRight">
				<h1>In primo piano:</h1>
				<p className="grey"> A cura di linkedin notizie</p>
				<h2> Big ideas 2025</h2>
				<p className="days">10 giorni fa - 1545 lettori</p>
				<div className="gameSection">
					<h3>I giochi di oggi</h3>
					<div className="divGame">
						<img src={square_png} alt="square" />
						<div className="nameGames">
							<div>
								<h4>Tango</h4>
								<p>Armonizza la griglia</p>
							</div>
							<div>
								<i className="fa-solid fa-chevron-right"></i>
							</div>
						</div>
					</div>
					<div className="divGame">
						<img src={square_png2} alt="square" />
						<div className="nameGames">
							<div>
								<h4>Queens</h4>
								<p>Incorona ogni regione</p>
							</div>
							<div>
								<i className="fa-solid fa-chevron-right"></i>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="fixed">
				<div>
					<img src={women_png} alt="woman" className="img_resize" />
				</div>
				<footer>
					<p>informazioni accesibilità</p>
					<p>Centro assistenza</p>
					<p>Opzione per gli annunci pubblicitari</p>
					<p>Pubblicità Servizi alle azienda </p>
					<p>Scarica l'app Linkedin Altro</p>

					<img src={linkedin_png} alt="linkedin logo" className="" />
					<p>linkedin corporation &copy; 2024</p>
				</footer>
			</div>
		</>
	);
};

export default Aside_right;
