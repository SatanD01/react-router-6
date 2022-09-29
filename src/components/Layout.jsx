import {Outlet} from "react-router-dom";
import CustomLink from "./CustomLink";

const Layout = () => {
    return (
        <>
            <header>
                <CustomLink to="react-router-6">Home</CustomLink>
                <CustomLink to="react-router-6/blog">Blog</CustomLink>
                <CustomLink to="react-router-6/about">About</CustomLink>
            </header>
            <main className='container'>
                <Outlet/>
            </main>

            <footer className='container'>2021</footer>
        </>
    )
}

export default Layout;