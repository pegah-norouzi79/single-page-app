import { useEffect, useState } from "react"
import {Spinner} from "react-bootstrap"
import ShowListsPost from "./ShowListsPost";
import {Link} from "react-router-dom"
function ListPosts(){
    const [posts , setPosts] = useState("");
    const [loading , setLoading] = useState(true);
    const [error , setError] = useState("");
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
            setPosts(data);
            setLoading(false);
            setError("");
        }).catch(err=>{
            setError(err.message);
            setPosts("");
            setLoading(false);

        })
    }, []);
    return(
        <>
        <h2>Posts :</h2>
        <br></br>
        <Link to="/Posts/Create" type="button" class="btn btn-primary">Create Post</Link>
        {error && <div>{error}</div>}
        {loading && <div className="loading"><Spinner animation="border" role="status" /></div>}
        {posts && <ShowListsPost posts={posts}/>}
        </>
    )
}
export default ListPosts