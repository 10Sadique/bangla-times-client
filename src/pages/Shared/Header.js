import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className="navbar bg-blue-700 text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                />
                            </svg>
                        </label>
                        <div
                            tabIndex={0}
                            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-blue-600 rounded-box w-52 text-left"
                        >
                            <Link className="btn btn-ghost" to={`/home`}>
                                Home
                            </Link>
                            <Link className="btn btn-ghost" to={`/home`}>
                                Category
                            </Link>
                            <Link className="btn btn-ghost" to={`/home`}>
                                News
                            </Link>
                        </div>
                    </div>
                    <Link
                        to={`/`}
                        className="btn btn-ghost normal-case text-xl"
                    >
                        Bangla Times
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <div className="menu menu-horizontal p-0">
                        <Link className="btn btn-ghost" to={`/home`}>
                            Home
                        </Link>
                        <Link className="btn btn-ghost" to={`/home`}>
                            Category
                        </Link>
                        <Link className="btn btn-ghost" to={`/home`}>
                            News
                        </Link>
                    </div>
                </div>
                <div className="navbar-end">
                    <Link className="btn text-blue-700 bg-gray-100 border-0 hover:bg-gray-200 shadow-md shadow-gray-100/20 transition-all duration-300">
                        Get started
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Header;
