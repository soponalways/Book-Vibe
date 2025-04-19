import React from 'react';
import { Link, NavLink } from 'react-router';

const NavBar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow work-sans font-semibold">
                        <li><NavLink to="/" >Home</NavLink></li>
                        <li><NavLink to="/listedbooks" >Listed Books</NavLink></li>
                        <li><NavLink to="/readbooks" >Pages To Read</NavLink></li>
                    </ul>
                </div>
                <Link className="text-lg md:text-xl lg:text-3xl font-bold text-[#131313] ">Book Vibe</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-4 work-sans font-semibold">
                    <li><NavLink to="/" >Home</NavLink></li>
                    <li><NavLink to="/listedbooks" >Listed Books</NavLink></li>
                    <li><NavLink to="/readbooks" >Pages To Read</NavLink></li>
                </ul>
            </div>
            <div className="navbar-end gap-4">
                <a className="btn bg-[#23BE0A] text-white text-lg work-sans font-semibold rounded-lg">Sign In</a>
                <a className="btn bg-[#59C6D2] text-white text-lg work-sans font-semibold rounded-lg">Sign Up</a>
            </div>
        </div>
    );
};

export default NavBar;