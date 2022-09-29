import {Outlet, Link} from "react-router-dom";

const Aboutpage = () => {
    return (
        <>
            <h1>About page</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus animi architecto inventore.</p>
            <ul>
                <li><Link to='contacts'>Our Contacts</Link></li>
                <li><Link to='team'>Our Team</Link></li>
            </ul>

            {/*<Routes>*/}
            {/*    <Route path="contacts" element={<p>Our Contacts</p>}/>*/}
            {/*    <Route path="team" element={<p>Our team</p>}/>*/}
            {/*</Routes>*/}
            <Outlet/>
        </>
    )
}

export default Aboutpage;