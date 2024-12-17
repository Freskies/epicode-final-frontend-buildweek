import SidebarLeft from "./SidebarLeft";
import NewPostForm from "./NewPostForm";
import Posts from "./Posts";

const Home = () => {
	return (
		<div className="main">
			<SidebarLeft />
			<section className="post-section">
				<NewPostForm />
				<Posts />
			</section>
			<aside className="ads">aside right</aside>
		</div>
	);
};

export default Home;
