import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';

const SignUp = () => {
    const { createUser, updateUserProfile, verifyEmail } =
        useContext(AuthContext);

    const [error, setError] = useState('');
    const [accepted, setAccepted] = useState(false);

    const location = useLocation();
    const navigate = useNavigate();
    const to = location.state?.from?.pathname || '/';

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.fullname.value;
        const image = form.image.value;
        const email = form.email.value;
        const password = form.password.value;

        // console.log(name, email, password, image);

        const profile = {
            displayName: name,
            photoURL: image,
        };

        createUser(email, password)
            .then((result) => {
                const user = result.user;
                setError('');
                form.reset();

                handleUpadateProfie(profile);
                handleEmailVerificaton();
                toast('Please, verify your email.', {
                    icon: 'ℹ',
                });

                console.log(user);
                navigate(to, { replace: true });
            })
            .catch((err) => {
                console.error(err);
                setError(err.message);
            });
    };

    const handleUpadateProfie = (profile) => {
        updateUserProfile(profile)
            .then(() => {
                console.log('Name added.');
                console.log('Image added.');
            })
            .catch((err) => {
                console.error(err);
            });
    };

    const handleEmailVerificaton = () => {
        verifyEmail()
            .then(() => {
                console.log('Verfication Email Sent.');
            })
            .catch((err) => {
                console.error(err);
            });
    };

    const handleCheckBox = () => {
        setAccepted(!accepted);
    };

    return (
        <div className="my-10">
            <h1 className="mb-10 text-3xl font-bold text-center text-gray-700">
                Sign Up
            </h1>
            <div className="flex-shrink-0 w-full border shadow-lg border-gray-50 card bg-base-100">
                <form onSubmit={handleSubmit} className="w-full card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            required
                            type="text"
                            name="fullname"
                            placeholder="Name"
                            className="input input-bordered"
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Image URL</span>
                        </label>
                        <input
                            type="text"
                            name="image"
                            placeholder="Image URL"
                            className="input input-bordered"
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            required
                            type="email"
                            name="email"
                            placeholder="Email"
                            className="input input-bordered"
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            required
                            type="password"
                            name="password"
                            placeholder="Password"
                            className="input input-bordered"
                        />
                    </div>
                    {error && (
                        <div className="my-5 text-red-500">
                            <p>{error}</p>
                        </div>
                    )}
                    <div onClick={handleCheckBox} className="mt-3 form-control">
                        <label className="flex items-center gap-3 cursor-pointer">
                            <input
                                type="checkbox"
                                // checked
                                className="checkbox checkbox-primary checkbox-sm"
                            />
                            <span className="flex items-center gap-1 label-text">
                                Accept our
                                <Link
                                    to={`/terms`}
                                    className="text-indigo-600 underline"
                                >
                                    Terms and Conditions
                                </Link>
                                .
                            </span>
                        </label>
                    </div>
                    <div className="mt-6 form-control">
                        <button
                            disabled={!accepted}
                            type="submit"
                            className="btn btn-primary"
                        >
                            Sign Up
                        </button>
                    </div>
                    <div className="flex items-center gap-2 mx-auto mt-3">
                        <span>Already have an Account?</span>
                        <Link
                            to={`/signin`}
                            className="text-indigo-600 underline"
                        >
                            Sign In.
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
