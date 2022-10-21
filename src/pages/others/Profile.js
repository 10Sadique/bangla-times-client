import React, { useContext, useRef } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';

const Profile = () => {
    const { user } = useContext(AuthContext);

    const nameRef = useRef(user.displayName);
    const photoRef = useRef(user.photoURL);

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(nameRef.current.value);
        console.log(photoRef.current.value);
    };

    return (
        <div className="my-10">
            <h1 className="mb-10 text-3xl font-bold text-center text-gray-700">
                Update Profile
            </h1>
            <div className="flex-shrink-0 w-full border shadow-lg border-gray-50 card bg-base-100">
                <form onSubmit={handleSubmit} className="w-full card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            required
                            type="email"
                            name="email"
                            placeholder={user?.email || 'Email'}
                            value={user?.email || ''}
                            className="input input-bordered"
                            disabled
                        />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            ref={nameRef}
                            required
                            type="text"
                            name="name"
                            placeholder={user?.displayName || 'Password'}
                            className="input input-bordered"
                            defaultValue={user?.displayName || ''}
                        />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input
                            ref={photoRef}
                            required
                            type="text"
                            name="image"
                            placeholder={user?.photoURL || 'Password'}
                            className="input input-bordered"
                            defaultValue={user?.photoURL || ''}
                        />
                    </div>

                    {/* <div className="form-control">
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
                    </div> */}

                    <div className="mt-6 form-control">
                        <button type="submit" className="btn btn-primary">
                            Update Profile
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Profile;
