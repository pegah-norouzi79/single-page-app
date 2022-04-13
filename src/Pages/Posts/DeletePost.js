import { useState } from "react";
import {Button} from "react-bootstrap";
import {Spinner} from "react-bootstrap";
import Swal from "sweetalert2";
function DeletePost({postId}){
    const [loading , setLoading] = useState(false);
    const [error , setError] = useState("");
    const handleDelete = () => {
        setLoading(true);
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
            method: 'DELETE'
        })
            .then((res) => {
                setLoading(false)
                setError(null)
                Swal.fire({
                    title: "Thanks!",
                    text: `Post ${postId} delete successfully`,
                    icon: "success",
                    confirmButtonText: "Ok",
                });
            }).catch(err => {
                setLoading(false)
                setError(err.message)
                Swal.fire({
                    title: "Error!",
                    text: err.message,
                    icon: "warning",
                    confirmButtonText: "Ok",
                });
            });
    }
    return(
        <>
        <Button onClick={handleDelete} variant="danger" className="mt-3">
        Delete
        {loading && <div className="loading"><Spinner animation="border" size="sm" /></div>}
        </Button>
        {error && <div className="fw-bold text danger">{error}</div>}
        </>
    )
}
export default DeletePost