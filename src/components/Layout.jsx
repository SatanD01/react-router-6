import {NavLink, Outlet} from "react-router-dom";

const setActive = ({isActive}) => isActive ? 'active-link' : '';

const Layout = () => {
    return (
        <>
            <header>
                <NavLink className={setActive} to="/">Home</NavLink>
                <NavLink style={({isActive}) => ({color: isActive ? 'blue' : 'white'})} to="/blog">Blog</NavLink>
                <NavLink className={setActive} to="/about">About</NavLink>
            </header>
            <main className='container'>
                <Outlet/>
            </main>

            <footer className='container'>2021</footer>
        </>
    )
}

export default Layout;