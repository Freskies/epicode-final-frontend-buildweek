import SidebarLeft from "./SidebarLeft";
import NewPostForm from "./NewPostForm";
import Posts from "./Posts";
import SidebarRight from "./SidebarRight";

const Home = () => {
	return (
		<div className="main">
			<SidebarLeft />
			<section className="post-section">
				<NewPostForm />
				<Posts />
			</section>
			<SidebarRight />
		</div>
	);
};

export default Home;
