import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/Routes';

function App() {
    return (
        <div>
            <RouterProvider router={router} />
            <Toaster position="top-center" reverseOrder={false} />
        </div>
    );
}

export default App;
