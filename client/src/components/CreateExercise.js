import React,{useState} from 'react'
import axios from 'axios'

export default function CreateExercise() {
    const[username,setUsername] = useState("")
    const[description,setDescription] = useState("")
    const[duration,setDuration] = useState("")
    const [date, setDate] = useState("")

    const addExercise = e => {
        e.preventDefault()
        axios.post("http://localhost:4000/exercises/add",{
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
            <h1>Create New Exercise</h1>
            <form onSubmit={addExercise}>
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
                        required />
                </div>
                <button type="submit" class="btn btn-primary">Add Exercise</button>
            </form>
        </div>
    )
}
