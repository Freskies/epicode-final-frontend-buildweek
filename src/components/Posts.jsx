import { useState, useEffect, useCallback } from "react";
import Post from "./Post";
import Loading from "./Loading";
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "./../redux/action/posts";
import { getPosts } from "./../fetchFunctions";

const Posts = () => {
	const [error, setError] = useState(false);

	const posts = useSelector(({ posts }) => posts);

	const dispatch = useDispatch();
	const setterPosts = useCallback(
		posts => dispatch(setPosts(posts)),
		[dispatch],
	);

	useEffect(() => {
		if (posts.length) return;
		try {
			getPosts(setterPosts);
		} catch {
			setError(true);
		}
	}, [setterPosts, posts.length]);

	if (error) return <p>We&apos;re sorry an error is occured</p>;

	if (!posts.length) return <Loading />;

	return (
		<section className="posts">
			{posts.slice(0, 99).map(post => (
				<Post key={post._id} post={post} />
			))}
		</section>
	);
};

export default Posts;
