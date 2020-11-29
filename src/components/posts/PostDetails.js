import './PostDetail.css';
import React from 'react';
import CustomLoader from '../../Shared/Loader';
import { useParams } from 'react-router';

function PostDetail(props) {
    const style = {
        marginTop: '10%'
    }
    const { id } = useParams();

    const [detail, setDetail] = React.useState([]);
    const [comments, setComment] = React.useState([]);
    const [flag, setFlag] = React.useState(false);


    // fetch posts detail using post id
    const getDetail = async () =>  {
        try {
            const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/posts/${id}`);
            const detail = await response.json();
            setDetail(detail);
        } catch (err) {

        }
    }
    
    // fetch associated posts comment using post id
    const getComments = async () => {
        try {
            const res = await fetch(`${process.env.REACT_APP_API_BASE_URL}/comments?postId=${id}`);
            const comments = await res.json();
            setComment(comments);
        } catch (err) {

        }
    }

    React.useEffect(() => {
        // Get all data from server then stop loading and update state accordingly
        Promise.all([getDetail(), getComments()])
            .then(() => {
                setFlag(true)
            }).catch(err => {
                console.error('Error while fecthing data', err);
            })
    });

    const renderMarkup = () => {
        return (
            <div className="post-detail-container container">            
            <h2 className="text-center">{detail.title}</h2>
            <h6>{detail.body}</h6>
            <hr />
            <h3 className="text-center mb-4">Comments</h3>
            {
                comments.map((item, index) => {
                    return (
                        <div className="content" key={index}>
                            <h6><svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-person-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z" />
                                <path fill-rule="evenodd" d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                <path fill-rule="evenodd" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z" />
                            </svg>{item.name}</h6>
                            <small><svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-envelope-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z" />
                            </svg>
                                {item.email}</small>
                            <p key={index} className="m-6 comment">
                                {item.body}
                            </p>
                        </div>
                    )
                })
            }
        </div>
        )
    }

    return (
        flag ? renderMarkup() : <div style={style}><CustomLoader/></div>
    );
}


export default PostDetail;