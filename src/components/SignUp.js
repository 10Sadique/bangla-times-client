import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';

const SignUp = () => {
    const { createUser, setName } = useContext(AuthContext);
    const [error, setError] = useState('');

    // const location = useLocation();
    const navigate = useNavigate();
    // const to = location.state?.from?.pathname || '/';

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.fullname.value;
        const email = form.email.value;
        const password = form.password.value;

        // console.log(name, email, password);

        createUser(email, password)
            .then((result) => {
                const user = result.user;
                setName(name)
                    .then(() => {
                        console.log('Name added.');
                    })
                    .catch((err) => {
                        console.error(err);
                    });
                form.reset();
                setError('');
                navigate('/');
            })
            .catch((err) => {
                console.error(err);
                setError(err.message);
            });
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
                    <div className="mt-6 form-control">
                        <button type="submit" className="btn btn-primary">
                            Sign In
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
