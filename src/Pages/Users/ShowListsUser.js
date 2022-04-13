import {Link} from "react-router-dom"
function ShowListsUsers(props){
    return(
        <>
        <div className="row">
            {props.users.map(user=>(
                <div className="col-4 my-3" key={user.id}>
                    <div className="card">
                        <div className="card-header fw-bold bg-info">
                            <Link to={`/Users/${user.id}`}>{user.name}</Link>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">username: {user.username}</li>
                            <li className="list-group-item">email: {user.email}</li>
                            <li className="list-group-item">phone: {user.phone}</li>
                            <li className="list-group-item">website: {user.website}</li>
                        </ul>
                    </div>
                </div>
            ))}
        </div>
        </>
    )
}
export default ShowListsUsers