import { createBrowserRouter } from 'react-router-dom';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import Main from '../layout/Main';
import Category from '../pages/Category';
import Home from '../pages/Home';
import News from '../pages/News';

const newsLoader = () => {
    return fetch('http://localhost:5000/news');
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
                element: <News />,
                loader: ({ params }) => {
                    return fetch(`http://localhost:5000/news/${params.id}`);
                },
            },
            {
                path: '/category/:id',
                element: <Category />,
                loader: ({ params }) => {
                    return fetch(`http://localhost:5000/category/${params.id}`);
                },
            },
            { path: '/signin', element: <SignIn /> },
            { path: '/signup', element: <SignUp /> },
        ],
    },
]);
