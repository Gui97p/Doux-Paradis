import React from 'react';

import Welcome from './Welcome/Welcome.jsx';
import About from './About/About.jsx';
import Products from './Products/Products';
import Contact from './Contact/Contact';

function Home() {
    return (  
        <div>
            <Welcome />
            <About />
            <Products />
            <Contact />
        </div>
    );
}

export default Home;
