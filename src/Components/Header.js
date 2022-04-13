import {NavLink} from "react-router-dom"
function Header(){
    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-dark fw-bold">
            <div className="container-fluid">
            <NavLink to="/" className="navbar-brand  text-white">First Project</NavLink>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item  text-white">
                        <NavLink to="/"className={(navData) => navData.isActive ? " nav-link active  text-white" : "nav-link text-secondary"}  aria-current="page">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/Users" className={(navData) => navData.isActive ? " nav-link active  text-white" : "nav-link text-secondary"}>Users</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/Posts" className={(navData) => navData.isActive ? " nav-link active  text-white" : "nav-link text-secondary"}>Posts</NavLink>
                    </li>
                </ul>
            </div>
            </div>
        </nav>
        </>
    )
}
export default Header