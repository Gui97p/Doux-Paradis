import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import App from './App';
import Home from './pages/Home/Home.jsx';
import Products from './pages/Products/Products.jsx';
import Reservations from './pages/Reservations/Reservations.jsx';

import { createBrowserRouter, RouterProvider} from 'react-router-dom';


const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'products',
                element: <Products />
            },
            {
                path: 'reservations',
                element: <Reservations />
            }
        ]
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);
