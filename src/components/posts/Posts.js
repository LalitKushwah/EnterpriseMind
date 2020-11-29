import React from 'react';
import SinglePost from './SinglePost';
import CustomLoader from '../../Shared/Loader';

function Posts() {

    let [posts, setPosts] = React.useState([]);
    let [flag, setFlag] = React.useState(false);

    React.useEffect(() => {
        async function getList() {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts');
                const items = await response.json();
                console.log(items);
                setPosts(items);
                setFlag(true);
            } catch (exception) {
                console.error(exception)
            }
        }
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
                            posts.map(item => {
                                return (
                                    <SinglePost title={item.title} userId={item.userId} body={item.body} id={item.id}></SinglePost>
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