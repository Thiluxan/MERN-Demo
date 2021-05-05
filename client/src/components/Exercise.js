import React,{useEffect,useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

export default function Exercise() {
    const[exercises,setExercises] = useState([])

    useEffect(() => {
        axios.get("http://localhost:4000/exercises")
        .then(response => {
            console.log(response.data)
            setExercises(response.data)
        })
    },[])

    const deleteExercise = (id) => {
        axios.delete(`http://localhost:4000/exercises/delete/${id}`)
        .then(res => {
            window.location.replace("/")
        })
        .catch(err => {
            console.log(err)
        })
    }

    return (
        <div>
            <h1>List of Exercises</h1>
            <table style={{width:"100%",marginTop:"25px"}}>
                <thead>
                    <th>Username</th>
                    <th>Description</th>
                    <th>Duration</th>
                    <th>Date</th>
                    <th></th>
                    <th></th>
                </thead>
                <tbody>
                    {exercises.map(exercise =>(
                        <tr key={exercise._id}>
                            <td>{exercise.username}</td>
                            <td>{exercise.description}</td>
                            <td>{exercise.duration}</td>
                            <td>{exercise.date}</td>
                            <td>
                                <Link to={{pathname:'/edit', state:{exercise:{exercise}}}}>
                                <button className="btn btn-info">
                                    Edit
                                </button>
                                </Link>
                            </td>
                            <td><button className="btn btn-danger" onClick={() => deleteExercise(exercise._id)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
