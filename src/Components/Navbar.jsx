import { Link } from "react-router-dom";

const Navbar = () => {
    const navOptions = <>
        <li><Link to='/' className="font-semibold text-white">Home</Link></li>
        <li><Link to='/about' className="font-semibold text-white">About</Link></li>
        <li><Link to='/skills' className="font-semibold text-white">Skills</Link></li>
        <li><Link to='/projects' className="font-semibold text-white">Projects</Link></li>
        <li><Link to='/contact' className="font-semibold text-white">Contact</Link></li>
    </>
    return (
        <div>
            <div className="navbar bg-base-200">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                              {navOptions}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-2xl ">Athai Mahbub Mim</a>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                {/* <div className="navbar-end">
                    <a className="btn">Button</a>
                </div> */}
            </div>
        </div>
    );
};

export default Navbar;