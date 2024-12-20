import SidebarLeft from "./SidebarLeft";
import NewPostForm from "./NewPostForm";
import Posts from "./Posts";
import SidebarRight from "./SidebarRight";

const Home = () => {
	return <SidebarRight />;
	return (
		<div className="main">
			<section className="left">
				<SidebarLeft />
			</section>
			<section className="post-section">
				<NewPostForm />
				<Posts />
			</section>
			<section className="right">
				<SidebarRight />
			</section>
		</div>
	);
};

export default Home;
