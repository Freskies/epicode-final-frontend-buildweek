import "../assets/style/giulio3.css";
const UnderProfile = () => {
	return (
		<main className="underSection">
			<div className="topsection">
				<h2>
					Scarica l'app LinkedIn e vedi più profili come quello di Gabriele, in
					ogni momento, dove vuoi
				</h2>
				<div className="inputprofile">
					<input className="input1" type="email" placeholder="mario.rossi@gmail.com"></input>
					<button> Invia un Link </button>
                    <p className="p1"> Mandami invece un SMS </p>
				</div>
			</div>
            <div className="about">
                <section >
                    <h4>About</h4>
                    <p> Internet executive with over 20 years of experience, including general menagement of mid to large size organizations corporate development, product development , buisness operations , and strategy.</p>
                    <p>... see more </p>
                </section>
            </div>
		</main>
	);
};
 export default UnderProfile