import {useParams} from 'react-router-dom';
import {useEffect, useState} from 'react'
function ShowUser(){
    const {id} = useParams();
    const [user , setUser] = useState(null);
    const [loading , setLoading] = useState(true);
    const [error , setError] = useState(null);
    useEffect( ( )=> {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(response => response.json())
            .then(data => {
                setLoading(false);
                setError(null);
                setUser(data)
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
                setUser(null)
            })

    } , [id])
    return(
        <>
        <h3 className="my-4">User : {id}</h3>
        {loading ? <div className="d-flex justify-content-center"><div className="spinner-border" role="status"></div></div> : ''}
        {error ? {error} : null}
        {user == null ? '' : 
            <div className="col-8" key={user.id} >
                <div className="card">
                    <div className="card-header fw-bold bg-info">
                        <span>{user.name}</span>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">username : {user.username}</li>
                        <li className="list-group-item">email : {user.email}</li>
                        <li className="list-group-item">phone {user.phone}</li>
                        <li className="list-group-item">website {user.website}</li>
                    </ul>
                </div>
            </div>}
        </>
    )
}
export default ShowUser;