import {Route, Routes, Navigate} from "react-router-dom";

import Homepage from "./pages/Homepage";
import Aboutpage from "./pages/Aboutpage";
import Blogpage from "./pages/Blogpage";
import Notfoundpage from "./pages/Notfoudpage";
import Layout from "./components/Layout";
import SinglePage from "./pages/SinglePage";
import CreatePost from "./pages/CreatePost";
import EditPost from "./pages/EditPost";
import LoginPage from "./pages/LoginPage";
import RequireAuth from "./hoc/RequireAuth";
import {AuthProvider} from "./hoc/AuthProvider";


function App() {
    return (
        <AuthProvider>
            <Routes>
                <Route path="/react-router-6" element={<Layout/>}>
                    <Route index element={<Homepage/>}/>
                    <Route path="react-router-6/about" element={<Aboutpage/>}>
                        <Route path="react-router-6/contacts" element={<p>Our Contacts</p>}/>
                        <Route path="react-router-6/team" element={<p>Our Team</p>}/>
                    </Route>
                    {/*Переадресация через Navigate*/}
                    <Route path="react-router-6/about-us" element={<Navigate to='/about' replace/>}/>
                    <Route path="react-router-6/blog" element={<Blogpage/>}/>
                    <Route path="react-router-6/blog/:id" element={<SinglePage/>}/>
                    <Route path="react-router-6/blog/:id/edit" element={<EditPost/>}/>
                    <Route path="react-router-6/blog/new" element={
                        <RequireAuth>
                            <CreatePost/>
                        </RequireAuth>
                    }/>
                    <Route path="react-router-6/login" element={<LoginPage/>}/>
                    <Route path="react-router-6/*" element={<Notfoundpage/>}/>
                </Route>
            </Routes>
        </AuthProvider>
    );
}

export default App