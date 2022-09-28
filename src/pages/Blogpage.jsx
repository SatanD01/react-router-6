import {useState, useEffect} from "react";
import {Link} from "react-router-dom";

const Blogpage = () => {
    const [posts, setPosts] = useState();

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPosts(data))
    }, []);

    return  (
        <>
            <h1>Blog page</h1>
            {
                posts?.map(post => (
                    <Link key={post.id} to={`/blog/${post.id}`}>
                        <li>{[post.title]}</li>
                    </Link>
                ))
            }
        </>
    )
}

export default Blogpage;