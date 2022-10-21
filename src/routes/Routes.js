import { createBrowserRouter } from 'react-router-dom';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import TermsAndConditions from '../components/TermsAndConditions';
import Main from '../layout/Main';
import Category from '../pages/Category';
import Home from '../pages/Home';
import News from '../pages/News';
import Profile from '../pages/others/Profile';
import PrivateRoute from './PrivateRoute';

const newsLoader = () => {
    return fetch('https://bangla-times-server.vercel.app/news');
};

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            { path: '/', element: <Home />, loader: newsLoader },
            { path: '/home', element: <Home />, loader: newsLoader },
            {
                path: '/news/:id',
                element: (
                    <PrivateRoute>
                        <News />
                    </PrivateRoute>
                ),
                loader: ({ params }) => {
                    return fetch(
                        `https://bangla-times-server.vercel.app/news/${params.id}`
                    );
                },
            },
            {
                path: '/category/:id',
                element: <Category />,
                loader: ({ params }) => {
                    return fetch(
                        `https://bangla-times-server.vercel.app/category/${params.id}`
                    );
                },
            },
            { path: '/signin', element: <SignIn /> },
            { path: '/signup', element: <SignUp /> },
            { path: '/terms', element: <TermsAndConditions /> },
            {
                path: '/profile',
                element: (
                    <PrivateRoute>
                        <Profile />
                    </PrivateRoute>
                ),
            },
        ],
    },
]);
