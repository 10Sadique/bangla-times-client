import React from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import LeftSideNav from './LeftSideNav';

const Header = () => {
    return (
        <div>
            <div className="text-white bg-blue-700 navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <FaBars className="w-5 h-5" />
                        </label>
                        <div
                            tabIndex={0}
                            className="p-2 mt-3 text-left bg-blue-600 shadow menu menu-compact dropdown-content rounded-box w-52"
                        >
                            <Link className="btn btn-ghost" to={`/home`}>
                                Home
                            </Link>
                            <Link className="btn btn-ghost" to={`/home`}>
                                News
                            </Link>
                            <LeftSideNav />
                        </div>
                    </div>
                    <Link
                        to={`/`}
                        className="text-xl normal-case btn btn-ghost"
                    >
                        Bangla Times
                    </Link>
                </div>
                <div className="hidden navbar-center lg:flex">
                    <div className="p-0 menu menu-horizontal">
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
                    <Link className="text-blue-700 transition-all duration-300 bg-gray-100 border-0 shadow-md btn hover:bg-gray-200 shadow-gray-100/20">
                        Get started
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Header;
