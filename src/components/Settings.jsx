import React, { useEffect, useState } from 'react';
import '../assets/style/settings.css';

const Settings = () => {

    const apiUrl = 'https://striveschool-api.herokuapp.com/api/profile/'

    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzVmZTgwMTBlYTI4NjAwMTUyOGI5MmMiLCJpYXQiOjE3MzQzMzg2ODQsImV4cCI6MTczNTU0ODI4NH0.AoNp0DurJkiu2mv2_BiO-iHBwxoqsWheqVnjoVkv0Yw'

    const [data, setData] = useState([])

    const getProfiles = async () => {
        try {
            const response = await fetch(apiUrl, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`)
            }

            const profiles = await response.json();

            setData(profiles);

        } catch (error) {
            console.error('Si è verificato un errore:', error);
        }
    };

    useEffect(() => {
        getProfiles();
    }, []); 

    return (
        <div>
            <div id="impostazioni">
                <img src="https://placedog.net/500" alt="" />
            </div>

            <div id='main'>
                <main>
                    
                </main>

                <aside>
                    <div>
                        <h3>
                            Lingua del profilo
                        </h3>
                        <p>
                            Inglese
                        </p>
                    </div>

                    <div id='suggeriti'>

                        <p>
                            Altri profili per te
                        </p>

                        {data.slice(500, 510).map((profile, index) => (
                            <div key={index}>

                                <img src="https://placedog.net/50/50" alt="" />

                                <div>
                                    <h4>{profile.name}</h4>
                                    <p>{profile.email}</p>
                                </div>

                                <hr />

                            </div>
                        ))}
                    </div>
                </aside>
            </div>
        </div>
    );
}

export default Settings;