import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    const location = useLocation();

    if (loading) {
        return (
            <div className="mx-auto my-10">
                <button className="btn btn-primary loading">loading</button>
            </div>
        );
    }

    if (!user) {
        return <Navigate to={`/signin`} state={{ from: location }} replace />;
    }

    return children;
};

export default PrivateRoute;
