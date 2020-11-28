import './SinglePost';
import { Link } from 'react-router-dom';
import SinglePost from './SinglePost';
import React from 'react';


function Posts () {

    let [posts, setPosts] = React.useState([]);

    React.useEffect(() => {
        async function getList() {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const items = await response.json();
            console.log(items);
            setPosts(items);
        }
        getList();
    }, []);

    return (
        <div className="container">
            {
                posts.map(item => {
                    return (
                        <Link to={`/post/${item.id}`} key={item.title}>
                            <SinglePost title={item.title} userId={item.userId}></SinglePost>
                        </Link>
                    )
                })
            }
        </div>
    )
}

export default Posts;