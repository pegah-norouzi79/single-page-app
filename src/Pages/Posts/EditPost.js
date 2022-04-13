import {useState, useEffect} from "react";
import {useParams} from "react-router-dom"
import EditFormPost from "./EditFormPost";
function EditPost(){
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
        <h3>Edit Post:</h3>
        {loading ? <div className="d-flex justify-content-center"><div className="spinner-border" role="status"></div></div> : ''}
        {error ? {error} : null}
        {post && <EditFormPost post={post}/>}
        </>
    )
}
export default EditPost