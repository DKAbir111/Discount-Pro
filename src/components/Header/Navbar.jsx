import { Link, NavLink } from "react-router-dom"

export default function Navbar() {

    const links = <>
        <li>
            <NavLink to={'/'} className='md:text-white'>Home</NavLink>
        </li>
        <li>
            <NavLink to={'/brands'} className='md:text-white'>Brands</NavLink>
        </li>
        <li>
            <NavLink to={'/profile'} className='md:text-white'>My Profile</NavLink>
        </li>
        <li>
            <NavLink to={'/about'} className='md:text-white'>About Dev</NavLink>
        </li>
    </>
    return (
        <div className="bg-[#2C3D4E]">
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {
                                links
                            }
                        </ul>
                    </div>
                    <a className="text-2xl font-bold text-white">Discount Pro</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-2">
                        {
                            links
                        }
                    </ul>
                </div>
                <div className="navbar-end flex gap-3">
                    <Link to='/auth/login' className="btn bg-[#19BC9B] border-none rounded-sm">Login</Link>
                    <Link to='/auth/register' className="border-2 btn rounded-sm text-white bg-transparent">Registration</Link>
                </div>
            </div>
        </div>
    )
}
