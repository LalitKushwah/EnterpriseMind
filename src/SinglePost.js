import './SinglePost.css';
import { Link } from 'react-router-dom';

function SinglePost(props) {
    return (
        <tr>
            <td>
                <Link to={`/post/${props.id}`} key={props.title}>
                    <h4>{props.title}</h4>
                    <p>{props.body}</p>
                </Link>
            </td>
            <td className="text-center">
                <Link to="/user-profile">
                    <img className="media-object" src={`https://ui-avatars.com/api/?name=${props.userId}&rounded=true`} alt="..." />
                </Link>
            </td>
        </tr>     
    )
}

export default SinglePost