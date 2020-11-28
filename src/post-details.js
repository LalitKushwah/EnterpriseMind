import './PostDetail.css';
import React from 'react';


function PostDetail (props) {
    let [detail, setDetail] = React.useState([]);
    let [comments, setComment] = React.useState([]);

    React.useEffect(() => {
        async function getDetail() {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${props.match.params.id}`);
            const detail = await response.json();
            console.log(detail);
            setDetail(detail);
        }
        getDetail();

        async function getComments() {
            const res = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${props.match.params.id}`);
            const comments = await res.json();
            setComment(comments);            
        }
        getComments();

    }, []);
    return (
        <div className="post-detail-container container">
            <h4>{detail.title}</h4>
            {
                comments.map((item, index) => {
                    return (
                    <p key={index}>{item.body}</p>
                    )
                })
            }
        </div>
    );
}

export default PostDetail;