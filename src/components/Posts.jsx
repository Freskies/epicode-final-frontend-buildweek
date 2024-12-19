import { useState, useEffect, useCallback } from "react";
import Post from "./Post";
import Loading from "./Loading";
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "./../redux/action/posts";
import { getPosts } from "./../fetchFunctions";
import DropdownFilter from "./DropdownFilter";

const MAX_POSTS_TO_SHOW = 30;

const Posts = () => {
	const [error, setError] = useState(false);
	const [sortMethod, setSortMethod] = useState("più recenti per primi");

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

	const sortingFn = selectedOption => {
		switch (selectedOption) {
			case "più rilevanti per primi":
				return post => post.image !== null;
			case "più recenti per primi":
			default:
				return (a, b) => new Date(b.updatedAt) - new Date(a.updatedAt);
		}
	};

	return (
		<section className="posts">
			<DropdownFilter sortMethod={sortMethod} setSortMethod={setSortMethod} />
			{posts
				.slice()
				.sort(sortingFn(sortMethod))
				.slice(0, MAX_POSTS_TO_SHOW)
				.map(post => (
					<Post key={post._id} post={post} />
				))}
		</section>
	);
};

export default Posts;
