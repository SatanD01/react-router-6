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
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Homepage/>}/>
                    <Route path="about" element={<Aboutpage/>}/>
                    {/*Переадресация через Navigate*/}
                    <Route path="about-us" element={<Navigate to='/about' replace/>}/>
                    <Route path="blog" element={<Blogpage/>}/>
                    <Route path="blog/:id" element={<SinglePage/>}/>
                    <Route path="blog/:id/edit" element={<EditPost/>}/>
                    <Route path="blog/new" element={
                        <RequireAuth>
                            <CreatePost/>
                        </RequireAuth>
                    }/>
                    <Route path="login" element={<LoginPage/>}/>
                    <Route path="*" element={<Notfoundpage/>}/>
                </Route>
            </Routes>
        </AuthProvider>
    );
}

export default App