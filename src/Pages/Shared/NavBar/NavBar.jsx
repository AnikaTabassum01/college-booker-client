import { Link } from "react-router-dom";


const NavBar = () => {


    const navOptions = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/classes'>Colleges</Link></li>
        <li><Link to='/instructors'>Admission</Link></li>
        <li><Link to='/dashboard'>My College</Link></li>
        <li><Link to='/'></Link></li>
    
    </>
    return (
        <>
            <div className="navbar fixed z-10 bg-opacity-60 text-white text-xl max-w-screen-xl bg-base-300">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-200 font-bold bg-opacity-30 text-xl  rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <div className="flex ml-4">
                        <img className="h-20" src="https://png.pngtree.com/png-clipart/20230405/original/pngtree-scool-college-logo-victor-png-image_9026968.png" alt="" />
                        <h2 className="font-bold text-blue-900 normal-case text-5xl mt-2">College Booker</h2>
                    </div>
                </div>
                
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal font-bold text-xl text-blue-900">
                        {navOptions}
                    </ul>
                </div>
               


            </div>
        </>
    );
};

export default NavBar;