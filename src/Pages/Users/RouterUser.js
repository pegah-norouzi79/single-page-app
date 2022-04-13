import {Routes, Route} from "react-router-dom"
import ListUsers from "./ListUsers"
import ShowUser from "./ShowUser"
function RouterUser(){
    return(
        <>
        <Routes>
        <Route path="/" element={<ListUsers/>}/>
        <Route path="/:id" element={<ShowUser/>}/>
        </Routes>
        </>
    )
}
export default RouterUser