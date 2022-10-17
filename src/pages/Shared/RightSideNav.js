import React from 'react';
import {
    FaGoogle,
    FaGithub,
    FaFacebook,
    FaYoutube,
    FaTwitter,
    FaTwitch,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import BrandCarousel from '../../components/BrandCarousel';

const RightSideNav = () => {
    return (
        <div className="p-4">
            <div className="w-full space-y-1">
                <button className="btn btn-outline w-full hover:bg-blue-600 border-2 border-blue-600 text-blue-600 hover:border-blue-600 normal-case space-x-2">
                    <FaGoogle />
                    <span>Login with Google</span>
                </button>
                <button className="btn btn-outline w-full border-2 normal-case space-x-2">
                    <FaGithub />
                    <span>Login with Github</span>
                </button>
            </div>
            <div className="mt-5">
                <h2 className="text-center text-xl font-bold mb-5">
                    Find us on
                </h2>
                <div className="space-y-2 w-full">
                    <Link className="btn btn-active btn-ghost space-x-2 normal-case w-full">
                        <FaFacebook />
                        <span>Facebook</span>
                    </Link>
                    <Link className="btn btn-active btn-ghost space-x-2 normal-case w-full">
                        <FaYoutube />
                        <span>YouTube</span>
                    </Link>
                    <Link className="btn btn-active btn-ghost space-x-2 normal-case w-full">
                        <FaTwitter />
                        <span>Twitter</span>
                    </Link>
                    <Link className="btn btn-active btn-ghost space-x-2 normal-case w-full">
                        <FaTwitch />
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
