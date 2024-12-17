import Sidebar from "./Sidebar";

const Home = () => {
	return (
		<div className="main">
			<aside className="profile">
				<Sidebar />
			</aside>
			<section className="post-section"></section>
			<aside className="ads">aside right</aside>
		</div>
	);
};

export default Home;
