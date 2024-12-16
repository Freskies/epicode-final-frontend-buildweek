import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
function App() {
	return (
		<>
			<Header />
			<main className="main">
				<aside className="profile">
			<Sidebar/>
					<figure className="card"></figure>
				</aside>
				<section className="post-section"></section>
				<aside className="ads">aside right</aside>
			</main>
		</>
	);
}

export default App;
