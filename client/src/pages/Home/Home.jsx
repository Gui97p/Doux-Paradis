import React from 'react';

import Welcome from './Welcome/Welcome.jsx';
import About from './About/About.jsx';
import Products from './Products/Products';
import Contact from './Contact/Contact';

function Home() {
    return (<main>
        <Welcome />
        <About />
        <Products />
        <Contact />
    </main>);
}

export default Home;
