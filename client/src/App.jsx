import React from 'react';

import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import { Outlet } from 'react-router-dom';
// import fetchApi from './api/fetchApi.js';

function App() {
    // fetchApi('products');

    return (<div>
        <Header />
        <Outlet />
        <Footer />
    </div>);
}

export default App;
