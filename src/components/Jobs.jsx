import React, { useEffect, useState } from 'react';
import { STRIVE_STUDENT_API_KEY } from './../api_key';

const Jobs = () => {

    const [jobs, setJobs] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    //https://strive-benchmark.herokuapp.com/api/jobs?search=query // cerca per query
    //https://strive-benchmark.herokuapp.com/api/jobs?company=Olla // annunci di una singola azienda
    //https://strive-benchmark.herokuapp.com/api/jobs?category=writing&limit=10 // annunci di una singola categoria

      /*Microsoft
      Google
      Apple
      Amazon
      Facebook
      IBM
      Tesla
      Netflix
      Salesforce*/

     /*Sviluppo Software (Development)
      Design (Design)
      Marketing (Marketing)
      Vendite (Sales)
      Supporto Clienti (Customer Support)
      Risorse Umane (Human Resources)
      Data Science (Data Science)
      Finanza (Finance)
      Ingegneria (Engineering)*/

    useEffect(() => {

        setLoading(true)
        setError(false)

        fetch(`https://strive-benchmark.herokuapp.com/api/jobs?search=Google`, {
            method: "GET",
            headers: {
                Authorization: STRIVE_STUDENT_API_KEY,
                "Content-Type": "application/json",
            },
        })

        .then((response) => {
            if (!response.ok) {
                throw new Error("Rejected")
            }
            return response.json()
        })

        .then((data) => {
            setJobs(data.jobs); // Assumendo che `data` abbia una proprietà `jobs`
        })

        .catch((err) => {
            setError(true)
            console.error("Errore nella fetch:", err)
        })

        .finally(() => {
            setLoading(false)
        })

    }, [])

    return (
        <div>
            <section>
                {loading && <p>Loading...</p>}
                {error && <p>Si è verificato un errore durante il caricamento dei dati.</p>}
                {jobs.map((job) => (
                    <div key={job.id}>
                        <h2>{job.title}</h2>
                        <p>{job.company}</p>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default Jobs;