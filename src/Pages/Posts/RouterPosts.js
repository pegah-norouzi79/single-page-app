import {Routes , Route} from "react-router-dom"
import CreatePost from "./CreatePost"
import EditPost from "./EditPost"

import ListPosts from "./ListPosts"
import ShowPost from "./ShowPost"
function RouterPosts(){
    return(
        <>
        <Routes>
            <Route path="/" element={<ListPosts />} />
            <Route path="/Create" element={<CreatePost />} />
            <Route path="/:id" element={<ShowPost />} />
            <Route path="/Edit/:id" element={<EditPost />} />
        </Routes>
        </>
    )
}
export default RouterPosts