import Header from "./components/Header";

function App() {
	return (
		<>
			<Header />
			<main className="main">
				<aside className="profile">
					<figure className="card"></figure>
				</aside>
				<section className="post-section"></section>
				<aside className="ads">aside right</aside>
			</main>
		</>
	);
}

export default App;