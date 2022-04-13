import { useState } from "react";
import {Form , Button} from "react-bootstrap";
import {Spinner} from "react-bootstrap";
import Swal from "sweetalert2";
function CreatePost(){
    const [title , setTitle] = useState("");
    const [body , setBody] = useState("");
    const [loading , setLoading] = useState(false);
    const [error , setError] = useState("");
    function handleSubmit(e){
        e.preventDefault();
        setLoading(true);
        fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
        title: title,
        body: body,
        userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((data) => 
  console.log(data),
  setLoading(false),
  setError(""),
  Swal.fire({
    title: 'Good job!',
    text: 'Posts created successfully!',
    icon:'success',
  }
  )
  ).catch(err => {
      setError(err.message);
      setLoading(false);
      Swal.fire({
        title: 'Oh No',
        text: err.message,
        icon:'warning',
      }
      )
  })
    }
    return(
        <>
        <div className="row mt-5">
            <div className="col-8">
                <h3>Create Post:</h3>
                <Form onSubmit={(e)=>handleSubmit(e)}>
                    <Form.Group className="mb-3">
                    <Form.Label>Title</Form.Label>
                    <Form.Control onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Enter title" />
                    <Form.Text className="text-danger">
                    {title ? "" : "Title is required ... "}
                    </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3">
                    <Form.Label>Body</Form.Label>
                    <Form.Control onChange={(e) => setBody(e.target.value)} as="textarea" rows={3} placeholder="Enter body"/>
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
        </div>
        </>
    )
}
export default CreatePost



