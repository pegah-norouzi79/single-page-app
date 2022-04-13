import {Link} from "react-router-dom"
function ShowListsPost(props){
    return(
        <>
        <div className="row">
            {props.posts.map(post=>(
                <div className="col-4 my-3" key={post.id}>
                    <div className="card">
                    <div className="card-header fw-bold bg-info">
                            <Link to={`/Posts/${post.id}`}>{post.title}</Link>
                        </div>
                        <div className="card-body">{post.body}</div>
                    </div>
                </div>
                
            ))}
        </div>
        </>
    )
}
export default ShowListsPost