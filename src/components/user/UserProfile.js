
import './UserProfile.css';
import userImage from '../../assets/user.png';

function UserProfile() {
    return (
        <div className="container card">
            <div className="card-body">
                <img src={userImage} height="100" width="100"></img>
                <h1>This is user profile</h1>
            </div>
            
        </div>
    )
}
export default UserProfile;