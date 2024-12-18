import React,{useState,useEffect} from "react";


const Experiences = ({userId, token})=> {
    const [experiences, setExperiences] =useState([])
    const [newExperience, setNewExperience]=useState({
        role: '',
        company:'',
        startDate:'',
        endDate:'',
        description:'',
        area:'',
    })
    const [image,setImage]= useState (null)

    const getExperiences = async()=> {
        try{
            const response = await fetch(
                `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences`, 
            )
        }
    }
}