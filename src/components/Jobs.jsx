import { useState, useEffect } from "react";
import { STRIVE_STUDENT_API_KEY } from "./../api_key";
import Loading from "./Loading";

const Jobs = () => {

  const [job, setjob] = useState([])
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

  fetch

  console.log(data1)
  console.log(data2)
  console.log(data3)

    return (
        <div>

        </div>
    )
}

export default Jobs