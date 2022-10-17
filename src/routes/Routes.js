import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import Category from '../pages/Category';
import Home from '../pages/Home';
import News from '../pages/News';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            { path: '/', element: <Home /> },
            { path: '/home', element: <Home /> },
            { path: '/news/:id', element: <News /> },
            { path: '/categories/:id', element: <Category /> },
        ],
    },
]);
