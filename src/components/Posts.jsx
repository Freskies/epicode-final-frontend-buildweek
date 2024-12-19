import { useState, useEffect } from "react";
import { STRIVE_STUDENT_API_KEY } from "./../api_key";
import Post from "./Post";
import Loading from "./Loading";
import DropdownFilter from "./DropdownFilter"; 

const Posts = () => {
	
  const [selectedOption, setSelectedOption] = useState("più recenti per primi");
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

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
        if (!response.ok) throw new Error("Rejected")
        const data = await response.json();
        setPosts(data);
      } catch (err) {
        setError(true);
        console.error("Errore nella fetch:", err)
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const sortedPosts = () => {
    if (selectedOption === "più recenti per primi") {
      return posts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    } else if (selectedOption === "più rilevanti per primi") {
      return posts.sort((a, b) => {
        const aHasImage = a.media && a.media.length > 0
        const bHasImage = b.media && b.media.length > 0
        return (bHasImage - aHasImage);
      });
    }
    return posts;
  };

  if (error) return "Error"

  if (loading) return <Loading />

  return (
    <section className="posts">
      <DropdownFilter 
        selectedOption={selectedOption} // Passa l'opzione selezionata
        onOptionSelect={setSelectedOption} // Passa la funzione per aggiornare l'opzione
      />
      {sortedPosts().slice(0, 99).map(post => <Post key={post._id} post={post} />)}
    </section>
  );
};

export default Posts