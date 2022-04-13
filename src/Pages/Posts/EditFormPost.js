import { useEffect, useState } from "react";
import {Form , Button} from "react-bootstrap";
import Swal from "sweetalert2";
import {Spinner} from "react-bootstrap";
function EditFormPost(props){
    const [title , setTitle] = useState("");
    const [body , setBody] = useState("");
    const [loading , setLoading] = useState(false);
    const [error , setError] = useState("");
    useEffect(()=>{
        setTitle(props.post.title);
        setBody(props.post.body)
    } ,[props.post])
    function handleSubmit(e){
        e.preventDefault();
        setLoading(true);
        fetch(`https://jsonplaceholder.typicode.com/posts/${props.post.id}`, {
        method: 'Put',
        body: JSON.stringify({
        title: title,
        body: body,
        userId: 1,
        id: props.post.id
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((data) => 
  setLoading(false),
  setError(""),
  Swal.fire({
    title: 'Good job!',
    text: 'Posts update successfully!',
    icon:'success',
  })
  ).catch(err => {
      setError(err.message);
      setLoading(false);
      Swal.fire({
        title: 'Oh No',
        text: err.message,
        icon:'warning',
      })
  })
    }
    return(
        <>
        <div className="col-7">
            <Form onSubmit={(e)=>handleSubmit(e)}>
                    <Form.Group className="mb-3">
                    <Form.Label>Title</Form.Label>
                    <Form.Control onChange={(e) => setTitle(e.target.value)} type="text" value={title} placeholder="Enter title" />
                    <Form.Text className="text-danger">
                    {title ? "" : "Title is required ... "}
                    </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3">
                    <Form.Label>Body</Form.Label>
                    <Form.Control onChange={(e) => setBody(e.target.value)} as="textarea" value={body} rows={6} placeholder="Enter body"/>
                    <Form.Text className="text-danger">
                    {body ? "" : "Body is required ..."}
                    </Form.Text>
                    </Form.Group>
                    <Button variant="primary" type="submit" disabled={title === '' || body === ''}>
                        {loading && <div className="loading"><Spinner animation="border" size="sm" /></div>}
                        Create
                    </Button>
                    {error && <div className="fw-bold text danger">{error}</div>}
            </Form>
        </div>
        </>
    )
}
export default EditFormPost