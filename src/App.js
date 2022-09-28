import {Route, Routes} from "react-router-dom";

import Homepage from "./pages/Homepage";
import Aboutpage from "./pages/Aboutpage";
import Blogpage from "./pages/Blogpage";
import Notfoundpage from "./pages/Notfoudpage";
import Layout from "./components/Layout";
import SinglePage from "./pages/SinglePage";
import CreatePost from "./pages/CreatePost";
import EditPost from "./pages/EditPost";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Homepage/>}/>
                    <Route path="about" element={<Aboutpage/>}/>
                    <Route path="blog" element={<Blogpage/>}/>
                    <Route path="blog/:id" element={<SinglePage/>}/>
                    <Route path="blog/:id/edit" element={<EditPost/>}/>
                    <Route path="blog/new" element={<CreatePost/>}/>
                    <Route path="*" element={<Notfoundpage/>}/>
                </Route>
            </Routes>
        </>
    );
}

export default App