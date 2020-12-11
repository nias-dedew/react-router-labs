import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

class ProfilePage extends React.Component {
    goBack() {
        this.props.history.goBack();
    }

    render() {
        return (
            <div>
                Profile <br />
                <Link to="/counter">To Counter Page</Link> <br />
                {/* <Link to="/home"> Go Back</Link> */}
                <button onClick={() => this.goBack()}>Go Back</button>
            </div>
        )
    }
}

export default ProfilePage;

// function ProfilePage({ history }) {

//     return (
//         <div>
//             <p>Profile Page</p>
//             <button onClick={() => history.goBack()}>Back to Home Page</button> &nbsp;
//             <Link to='/counter' className="App" >Go to Counter Page</Link>
//         </div>
//     )
// }

// export default ProfilePage;
