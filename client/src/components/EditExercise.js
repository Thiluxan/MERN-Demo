import React, { useState } from 'react'
import axios from 'axios'
import {useLocation} from 'react-router-dom'

export default function EditExercise() {
    const exer = useLocation()
    console.log(exer.state.exercise)
    const[id] = useState(exer.state.exercise.exercise._id)
    const[username,setUsername] = useState(exer.state.exercise.exercise.username)
    const[description,setDescription] = useState(exer.state.exercise.exercise.description)
    const[duration,setDuration] = useState(exer.state.exercise.exercise.duration)
    const[date,setDate] = useState(exer.state.exercise.exercise.date)

    const editExercise = e =>{
        e.preventDefault()
        axios.post(`http://localhost:4000/exercises/update/${id}`,{
            username: username,
            description:description,
            duration:duration,
            date: date
        })
        .then(res => {
            window.location.replace("/")
        })
        .catch(err => {
            console.log(err)
        })
    }
    return (
        <div>
            <h1>Edit Exercise</h1>
            <form onSubmit={editExercise}>
                <div className="form-group">
                    <label>Username</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        value={username} 
                        onChange={e => setUsername(e.target.value)}
                        placeholder="Enter username"
                        required />
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        value={description} 
                        onChange={e => setDescription(e.target.value)}
                        placeholder="Enter description"
                        required />
                </div>
                <div className="form-group">
                    <label>Duration</label>
                    <input 
                        type="number" 
                        className="form-control" 
                        value={duration} 
                        onChange={e => setDuration(e.target.value)}
                        placeholder="Enter duration"
                        required />
                </div>
                <div className="form-group">
                    <label>Date</label>
                    <input 
                        type="date" 
                        className="form-control" 
                        value={date} 
                        onChange={e => setDate(e.target.value)}
                        placeholder="Enter date"
                         />
                </div>
                <button type="submit" class="btn btn-primary">Save Exercise</button>
            </form>
        </div>
    )
}
