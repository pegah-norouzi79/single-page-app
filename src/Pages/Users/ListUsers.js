import { useEffect, useState } from "react"
import {Spinner} from "react-bootstrap"
import ShowListsUsers from "./ShowListsUser";
function ListUsers(){
    const [users , setUsers] = useState("");
    const [loading , setLoading] = useState(true);
    const [error , setError] = useState("");
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
            setUsers(data);
            setLoading(false);
            setError("");
        }).catch(err=>{
            setError(err.message);
            setUsers("");
            setLoading(false);

        })
    }, []);
    return(
        <>
        <h2>Users :</h2>
        {error && <div>{error}</div>}
        {loading && <div className="loading"><Spinner animation="border" role="status" /></div>}
        {users && <ShowListsUsers users={users}/>}
        </>
    )
}
export default ListUsers