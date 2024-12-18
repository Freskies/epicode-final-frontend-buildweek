import { useState, useEffect } from "react";
import { STRIVE_STUDENT_API_KEY } from "./../api_key";
import Post from "./Post";

const Posts = () => {
	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	useEffect(() => {
		setLoading(true);
		setError(false);
		(async () => {
			try {
				const response = await fetch(
					`https://striveschool-api.herokuapp.com/api/posts/`,
					{
						method: "GET",
						headers: {
							Authorization: STRIVE_STUDENT_API_KEY,
							"Content-Type": "application/json",
						},
					},
				);
				if (!response.ok) throw new Error("Rejected");
				const data = await response.json();
				const sortedPosts = data.sort(
					(a, b) => new Date(b.createdAt) - new Date(a.createdAt),
				);
				setPosts(sortedPosts);
				console.log(data);
			} catch (err) {
				setError(true);
				console.error("Errore nella fetch:", err);
			} finally {
				setLoading(false);
			}
		})();
	}, []);

	if (error) return "Error";

	if (loading) return "Loading...";

	return (
		<section className="posts">
			{posts.length > 0 &&
				posts.slice(0, 99).map(post => <Post key={post._id} post={post} />)}
		</section>
	);
};

export default Posts;
