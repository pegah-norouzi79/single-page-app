import { useParams } from "react-router";
import {useState , useEffect} from "react";
import {Link} from "react-router-dom"
import DeletePost from "./DeletePost";
function ShowPost(){
    const {id} = useParams();
    const [post , setPost] = useState("");
    const [loading , setLoading] = useState(true);
    const [error , setError] = useState("");
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response => response.json())
        .then(data => {
            setPost(data);
            setLoading(false);
            setError("");
        }).catch(err=>{
            setError(err.message);
            setPost("");
            setLoading(false);

        })
    }, [id]);
    return(
        <>
        <h2>Posts : {id}</h2>
        {loading ? <div className="d-flex justify-content-center"><div className="spinner-border" role="status"></div></div> : ''}
        {error ? {error} : null}
        {post == null ? '' : 
            <div className="col-8 my-3" key={post.id}>
            <div className="card">
            <div className="card-header fw-bold bg-info">
                    {post.title}
                </div>
                <div className="card-body">{post.body}</div>
            </div>
            <DeletePost postId={post.id}/>
            <Link to={`/Posts/Edit/${id}`} type="button" className="btn btn-warning mx-3 mt-3">Edit</Link>
        </div>}
        </>
    )
}
export default ShowPost;


