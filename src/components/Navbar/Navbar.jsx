import { NavLink, useLocation } from "react-router";


const Navbar = () => {
    const menu = <>
        <li><NavLink to={"/home"}>Home</NavLink></li>
        <li><NavLink to={"/home"}>Statistics</NavLink></li>
        <li><NavLink to={"/dashboard"}>Dashboard</NavLink></li>
    </>
    const {pathname} = useLocation();
    // console.log(pathname);
    const isHome = pathname === "/" || pathname === "/home";
    // console.log(isHome)

    return (
        <div className={`navbar lg:px-32 md:px-5 ${isHome?"bg-violet-500 lg:mt-7":"bg-white"} lg:rounded-t-2xl`}>
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${isHome? "text-white": "text-black"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {menu}
                    </ul>
                </div>
                <a className={`btn btn-ghost text-xl font-bold ${isHome?"text-white":"text-black"}`}>Gadget Heaven</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className={`menu menu-horizontal px-1 ${isHome?"text-white":"text-black"}`}>
                    {menu}
                </ul>
            </div>
            <div className="navbar-end space-x-4">
                <NavLink to={'/dashboard/cart'} className="btn bg-white p-2 rounded-full">
                    <img width="20" height="20" src="https://img.icons8.com/ios/50/shopping-cart--v1.png" alt="shopping-cart--v1" />
                </NavLink>
                <NavLink to={'/dashboard/wishlist'} className="btn bg-white p-2 rounded-full">
                    <img width="20" height="20" src="https://img.icons8.com/ios/50/like.png" alt="like" />
                </NavLink>
            </div>
        </div>
    );
};

export default Navbar;