import square_png from "../assets/square.svg";
import square_png2 from "../assets/square2.svg";
import women_png from "../assets/women.png";
import linkedin_png from "../assets/linkedin.svg";

const SidebarRight = () => {
	return (
		<aside className="ads">
			<div className="ads-card ads-card--1">
				<h2>In primo piano:</h2>
				<p className="grey">
					<small>A cura di linkedin notizie</small>
				</p>
				<h2>Big ideas 2025</h2>
				<p>
					<small>10 giorni fa - 1545 lettori</small>
				</p>
				<h2>I giochi di oggi</h2>
				<div className="game-container">
					{/* GAME 1 */}
					<img src={square_png} alt="square" />
					<div>
						<h4>Tango</h4>
						<p>Armonizza la griglia</p>
					</div>
					<i className="fa-solid fa-chevron-right"></i>
					{/* GAME 2 */}
					<img src={square_png2} alt="square" />
					<div>
						<h4>Queens</h4>
						<p>Incorona ogni regione</p>
					</div>
					<i className="fa-solid fa-chevron-right"></i>
				</div>
			</div>
			<div className="ads-card ads-card--2">
				<footer className="footer">
					<img src={women_png} alt="woman" className="ads-image" />
					<ul className="footer-links">
						<li>informazioni accesibilità</li>
						<li>Centro assistenza</li>
						<li>Opzione per gli annunci pubblicitari</li>
						<li>Pubblicità Servizi alle azienda</li>
						<li>Scarica l&apos;app Linkedin Altro</li>
						<li>
							<img src={linkedin_png} alt="linkedin logo" className="" />
						</li>
						<li>
							<p>linkedin corporation &copy; 2024</p>
						</li>
					</ul>
				</footer>
			</div>
		</aside>
	);
};

export default SidebarRight;
