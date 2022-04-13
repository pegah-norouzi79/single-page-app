import {Link} from "react-router-dom"
function Home(){
    return(
        <>
        <h1>welcome to my page</h1>
        <Link to="/Users" type="button" className="btn btn-primary">Users</Link>
        <Link to="/Posts" type="button" className="btn btn-success mx-4">Posts</Link>
        </>
    )
}
export default Home