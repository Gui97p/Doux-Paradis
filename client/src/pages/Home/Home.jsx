import React from 'react';
import Header from '../../components/Header/Header';

import Welcome from './Welcome/Welcome.jsx';
import About from './About/About.jsx';
import Products from './Products/Products';
import Contact from './Contact/Contact';
import Footer from '../../components/Footer/Footer';

function Home() {
    return (  
        <div>
            <Header />
            <Welcome />
            <About />
            <Products />
            <Contact />
            <Footer />
        </div>
    );
}

export default Home;
