import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaUser } from 'react-icons/fa';
import LeftSideNav from './LeftSideNav';
import { AuthContext } from '../../contexts/AuthProvider';

const Header = () => {
    const { user, logOut, loading } = useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
            .then(() => {
                console.log('logged out');
            })
            .catch((err) => {
                console.error(err);
            });
    };

    // if (loading) {
    //     return (
    //         <div>
    //             <button className="btn btn-primary loading">loading</button>
    //         </div>
    //     );
    // }

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
                        <Link className="btn btn-ghost" to={`/category/08`}>
                            News
                        </Link>
                        {user ? (
                            <div
                                onClick={handleSignOut}
                                className="btn btn-ghost"
                            >
                                Sign Out
                            </div>
                        ) : (
                            <div>
                                <Link className="btn btn-ghost" to={`/signin`}>
                                    Sign In
                                </Link>
                                <Link className="btn btn-ghost" to={`/signup`}>
                                    Sign Up
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
                <div className="navbar-end">
                    <p className="mr-3 font-semibold">
                        {user?.displayName ? user.displayName : ''}
                    </p>
                    <div className="flex items-center justify-center w-10 h-10 mr-3 text-indigo-600 bg-blue-200 rounded-full">
                        {!loading && user?.photoURL ? (
                            <img
                                className="w-full rounded-full"
                                src={user.photoURL}
                                alt=""
                            />
                        ) : (
                            <FaUser />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
