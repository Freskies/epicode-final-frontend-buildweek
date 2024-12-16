import Header from "./components/Header";
import Aside_right from "./components/Asideright";
import Maincard from "./components/mainCard";

function App() {
	return (
		<>
			<Header />
			<main className="main">
				<aside className="profile">
					<figure className="card"></figure>
				</aside>
				<section className="post-section">
					<Maincard />
				</section>
				<aside className="ads">
					<Aside_right />
				</aside>
			</main>
		</>
	);
}

export default App;
