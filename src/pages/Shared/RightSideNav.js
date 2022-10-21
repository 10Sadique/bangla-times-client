import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import {
    FaGoogle,
    FaGithub,
    FaFacebook,
    FaYoutube,
    FaTwitter,
    FaTwitch,
} from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import BrandCarousel from '../../components/BrandCarousel';
import { AuthContext } from '../../contexts/AuthProvider';

const RightSideNav = () => {
    const googleProvider = new GoogleAuthProvider();
    const { googleSignIn } = useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();
    const to = location.state?.from?.pathname || '/';

    const handleGoogleSignIn = () => {
        googleSignIn(googleProvider)
            .then((result) => {
                const user = result.user;
                console.log(user);
                navigate(to, { replace: true });
            })
            .catch((err) => {
                console.error(err);
            });
    };

    return (
        <div className="p-4">
            <div className="w-full space-y-1">
                <button
                    onClick={handleGoogleSignIn}
                    className="w-full space-x-2 text-blue-600 normal-case border-2 border-blue-600 btn btn-outline hover:bg-blue-600 hover:border-blue-600"
                >
                    <FaGoogle className="w-5 h-5" />
                    <span>Login with Google</span>
                </button>
                <button className="w-full space-x-2 normal-case border-2 btn btn-outline">
                    <FaGithub className="w-5 h-5" />
                    <span>Login with Github</span>
                </button>
            </div>
            <div className="mt-5">
                <h2 className="mb-5 text-xl font-bold text-center">
                    Find us on
                </h2>
                <div className="w-full space-y-2">
                    <Link className="w-full space-x-5 normal-case btn btn-active btn-ghost">
                        <FaFacebook className="w-5 h-5" />
                        <span>Facebook</span>
                    </Link>
                    <Link className="w-full space-x-5 normal-case btn btn-active btn-ghost">
                        <FaYoutube className="w-5 h-5" />
                        <span>YouTube</span>
                    </Link>
                    <Link className="w-full space-x-5 normal-case btn btn-active btn-ghost">
                        <FaTwitter className="w-5 h-5" />
                        <span>Twitter</span>
                    </Link>
                    <Link className="w-full space-x-5 normal-case btn btn-active btn-ghost">
                        <FaTwitch className="w-5 h-5" />
                        <span>Twitch</span>
                    </Link>
                </div>
            </div>
            <div className="mt-5">
                <BrandCarousel />
            </div>
        </div>
    );
};

export default RightSideNav;
