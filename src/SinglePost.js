import './SinglePost.css';
import {Link} from 'react-router-dom';

function SinglePost(props) {
    return (
            <div className="row">
                <div className="col-md-12">
                    <div className="media">
                        <div className="media-left">
                            <Link to="/user-profile">                        
                                <img className="media-object" src={`https://ui-avatars.com/api/?name=${props.userId}&rounded=true`} alt="..." />
                            </Link>
                        </div>
                        <div className="media-body">
                            <h4 className="media-heading">{props.title}</h4>
                        </div>
                    </div>
                </div>
            </div>      
    )
}

export default SinglePost