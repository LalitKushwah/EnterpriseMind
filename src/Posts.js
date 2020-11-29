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
            <table className="table table-borderless">
            <thead>
                <tr>
                    <th scope="col">Post</th>
                    <th scope="col">Creator</th>
                </tr>
            </thead>
            <tbody>
            {
                posts.map(item => {
                    return (
                        <SinglePost title={item.title} userId={item.userId} body={item.body} id={item.id}></SinglePost>
                    )
                })
            }
             </tbody>
            </table>
        </div>
    )
}

export default Posts;