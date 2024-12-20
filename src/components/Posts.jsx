import { useState, useEffect } from "react";
import { STRIVE_STUDENT_API_KEY } from "./../api_key";
import Post from "./Post";
import Loading from "./Loading";
import DropdownFilter from "./DropdownFilter"; 

const Posts = () => {

  const [selectedOption, setSelectedOption] = useState("più recenti per primi")
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const MAX_POSTS_TO_SHOW = 100

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
        setPosts(data);
      } catch (err) {
        setError(true);
        console.error("Errore nella fetch:", err);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

 // console.log(posts)

  const sortedPosts = () => {

   // console.log("Selected Option:", selectedOption)
   
    if (selectedOption === "più recenti per primi") {
      return [...posts].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    } 
	else if (selectedOption === "più rilevanti per primi") 
	{
      [...posts].sort((a) => {
        const aHasImage = a.media && a.media.length > 0;
        return (aHasImage);
      });
    }
    return posts;
  };

  if (error) return "Error"

  if (loading) return <Loading />

  const displayedPosts = sortedPosts().slice(0, MAX_POSTS_TO_SHOW);

  return (
    <section className="posts">
      <DropdownFilter 
        selectedOption={selectedOption} 
        onOptionSelect={setSelectedOption} 
      />
      {displayedPosts.map(post => <Post key={post._id} post={post} />)}
    </section>
  );
};

export default Posts;