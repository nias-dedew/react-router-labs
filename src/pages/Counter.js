import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

function CounterPage({ history }) {
    return (
        <div>
            <p>Counter Page</p>
            <button onClick={() => history.goBack()}>Back to Profile Page</button>
        </div>
    )
}

export default CounterPage;
