import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
            <Link to="/" className="navbar-brand">Exercise Tracker</Link>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    <li className="navbar-item mr-3">
                        <Link to="/">Exercises</Link>
                    </li>
                    <li className="navbar-item mr-3">
                        <Link to="/exercise">Create Exercise</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
