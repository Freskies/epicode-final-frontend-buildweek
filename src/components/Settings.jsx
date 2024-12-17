import React, { useEffect, useState } from 'react';
import '../assets/style/settings.css';
import profilepic from "../assets/pics/profilepic.jpeg";
import cover from "../assets/pics/cover.jpg";

const Settings = () => {

    const apiUrl2 = 'https://striveschool-api.herokuapp.com/api/profile/me'
    const apiUrl = 'https://striveschool-api.herokuapp.com/api/profile/'

    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzVmZWM1ODBlYTI4NjAwMTUyOGI5MzQiLCJpYXQiOjE3MzQzMzk2NzMsImV4cCI6MTczNTU0OTI3M30.cJn22VGMuyvv9kcjRR5HjVco2gh8W9bucPNn2jYypkM'

    const [data, setData] = useState([])
    const [myData, setmyData] = useState([])

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

            setData(profiles)

        } catch (error) {
            console.error('Si è verificato un errore:', error)
        }
    };

    const getMyProfile = async () => {
        try {
            const response = await fetch(apiUrl2, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`)
            }

            const profile = await response.json();

            setmyData(profile);

        } catch (error) {
            console.error('Si è verificato un errore:', error);
        }
    };

    useEffect(() => {
        getProfiles();
    }, []); 

    useEffect(() => {
        getMyProfile();
    }, []); 

    //console.log(myData)
    //console.log(data)

    const getProfileByName = (name) => {
        const profile = data.find(item => item.name === name); // Supponendo che la proprietà si chiami 'name'
        if (profile) {
            console.log(profile);
        } else {
            console.log(`Nessun profilo trovato con il nome: ${name}`);
        }
    };
    
    // Esempio di utilizzo dopo aver caricato i dati
    getProfiles().then(() => {
        getProfileByName('Luca'); // Sostituisci 'NomeDaCercare' con il nome effettivo che vuoi cercare
    });

    return (
        <div>
            <div id="impostazioni">
                <img src="https://placedog.net/500" alt="" />
            </div>

            <div id='greatGroup'>
                <main id='main'>
                    <div className="profilecard">
                        <img className="cover" src={cover} alt="cover" />
                        {/* Foto del profilo */}
                    
                        <img className="picprofile" src={profilepic} alt="Profile" />
                    
                        {/* Informazioni utente */}
                        <div className="user-info">
                            <h2 className="user-name">{myData.name} {myData.surname}</h2>
                            <p className="user-title">{myData.title} | {myData.area}</p>
					        <hr></hr>
                        </div>
                    </div>
                </main>

                <aside id='aside'>
                    <div id='lingue'>
                        <h3>
                            Lingua del profilo
                        </h3>
                        <p>
                            Inglese
                        </p>
                    </div>

                    <div id='suggeriti'>

                        <p id='special'>
                            Altri profili per te
                        </p>

                        {data.slice(500, 510).map((profile, index) => (
                            <div key={index}>

                                <div className='leader'>
                                    <img src="https://placedog.net/50/50" alt="" className='imgProfile'/>

                                        <div className='vice'>
                                            <h4>{profile.name}</h4>
                                            <p>{profile.email}</p>
                                        </div>
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