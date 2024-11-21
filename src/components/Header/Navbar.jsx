import { useContext } from "react"
import { Link, NavLink } from "react-router-dom"
import AuthContext from "../../Context/AuthContext"
import { IoMdHome } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { SiBrandfolder } from "react-icons/si";
import { MdDeveloperMode } from "react-icons/md";

export default function Navbar() {

    const { user, logOut } = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
            .then((result) => {
                console.log(result)
            }).catch((error) => {
                console.error(error)
            });

    }
    const links = <>
        <li>
            <NavLink to={'/'} className='lg:text-white'><IoMdHome /> Home</NavLink>
        </li>
        <li>
            <NavLink to={'/brands'} className='lg:text-white'><SiBrandfolder /> Brands</NavLink>
        </li>
        {
            user?.email && <li>
                <NavLink to={'/profile'} className='lg:text-white'><CgProfile /> My Profile</NavLink>
            </li>
        }
        <li>
            <NavLink to={'/about'} className='lg:text-white'><MdDeveloperMode /> About Dev</NavLink>
        </li>
    </>
    return (
        <div className="bg-[#2C3D4E]  sticky top-0 z-20">
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
                    <Link to='/' className="text-2xl font-bold text-white">Discount Pro</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-2">
                        {
                            links
                        }
                    </ul>
                </div>
                <div className="navbar-end flex gap-3">
                    {
                        !user ? <>
                            <Link to='/auth/login' className="btn bg-[#19BC9B] border-none rounded-sm">Login</Link>
                            <Link to='/auth/register' className="border-2 btn rounded-sm text-white bg-transparent">Registration</Link></> :
                            <div className="flex gap-3 items-center">
                                <p className="text-white">Welcome! {user.displayName.split(" ")[0]}</p>
                                <span className="rounded-full border border-[#19BC9B]">
                                    <img src={user.photoURL} alt="" className="rounded-full h-12 w-12" />
                                </span>
                                <button className="btn bg-[#19BC9B] border-none rounded-sm" onClick={handleLogOut}>Log Out</button>
                            </div>
                    }
                </div>
            </div>
        </div>
    )
}
