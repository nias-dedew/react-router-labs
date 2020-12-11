import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <div>
            <p>Home Page</p>
            <Link to='/profile' className="App">Go to Profile Page</Link>
        </div>
    )
}

export default HomePage;
