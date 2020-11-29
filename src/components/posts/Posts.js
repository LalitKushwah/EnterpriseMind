import {React, useEffect, useState} from 'react';
import SinglePost from './SinglePost';
import CustomLoader from '../../Shared/Loader';

function Posts() {

    const [posts, setPosts] = useState([]);
    const [flag, setFlag] = useState(false);

    async function getList() {
        try {
            const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/posts`);
            const items = await response.json();
            setPosts(items);
            setFlag(true);
        } catch (exception) {
            console.error(exception)
        }
    }

    useEffect(() => {
        getList();
    }, []);

    return (
        <div className="container">
            {

                (flag ? <table className="table table-borderless">
                    <thead>
                        <tr>
                            <th scope="col">Post</th>
                            <th scope="col">Creator</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            posts.map((item, index) => {
                                return (
                                    <SinglePost title={item.title} userId={item.userId} body={item.body} id={item.id} key={index}></SinglePost>
                                )
                            })
                        }
                    </tbody>
                </table> : <CustomLoader timeout="3000"/>)

            }
        </div>
    )
}

export default Posts;